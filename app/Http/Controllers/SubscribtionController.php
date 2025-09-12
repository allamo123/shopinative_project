<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Traits\SubscribtionTrait;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Services\PaymobService;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class SubscribtionController extends Controller
{
    use SubscribtionTrait;

    private $SubscriptionPlan;

    public function __construct()
    {
        $this->SubscriptionPlan = new SubscriptionPlan;
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $plans = $this->SubscriptionPlan->all();

        return Inertia::render('subscribe', [
            'plans' => $plans,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function checkout(Request $request)
    // {
    //     // if (auth()->user()->aciveSubscription) {
    //     //     # code...
    //     // }
    //     $plan_id = $request->only('plan_id');
    //     $subcribtion_plan = $this->SubscriptionPlan->where('id', $plan_id)->first();

    //     $checkout_url = $this->paySubscribtion($subcribtion_plan);
    //     return Inertia::location($checkout_url);
    // }

    public function handlePayMobCallBack(Request $request)
    {
        $paymentData = $request->all();
        $planId = Cache::pull('subscription_plan');

        $paymobService = new PaymobService;

        // Check if payment was successful
        if (!(boolean) $paymentData['success'] || ($paymentData['txn_response_code'] !== 'APPROVED')) {
            return $paymobService->failedAuthrizedPaymentRedirection();
        }

        // Validate HMAC
        if (!$paymobService->verifyPaymobHMAC($paymentData)) {
            return $paymobService->failedAuthrizedPaymentRedirection();
        }

        // Retrieve plan
        $subscriptionPlan = $this->SubscriptionPlan->find($planId);
        if (!$subscriptionPlan) {
            session()->flash("error", "Subscription plan not found.");
            return to_route('subscriber.home');
        }

        // Determine price
        $user = auth()->user();
        $isEgypt = $user->registerCountry->name === 'Egypt';
        $price = $isEgypt ? $subscriptionPlan->local_price : $subscriptionPlan->internation_price;

        // Calculate expiry date
        $expiryDate = $this->getExpirationDate(now(), $subscriptionPlan->duration);

        $subscriptionPlan->subscribtions()->create([
            'user_id'           => $user->id,
            'subscription_date' => now()->format('Y-m-d'),
            'expire_date'       => $expiryDate,
            'price'             => $price,
        ]);

        session()->flash("success", "You're now subscribed to the $subscriptionPlan->display_name plan. Thank you for joining us!");
        return to_route('subscriber.home');
    }
}
