<?php

namespace App\Http\Traits;

use App\Services\PaymobService;
use Illuminate\Support\Facades\Cache;

trait SubscribtionTrait
{
    public function getExpirationDate($subscribtion_date, $subscriobtion_duration)
    {
        $expiration_date;

        switch ($subscriobtion_duration) {
            case 'monthly':
                $expiration_date = now()->addMonths(1);
                break;
            case 'six_months':
                    $expiration_date = now()->addMonths(6);
                    break;
            case 'yearly':
                    $expiration_date = now()->addYears(1);
                    break;
            default:
                dd('not exist');
                break;
        }

        return $expiration_date->format('Y-m-d');
    }

    public function paySubscribtion($subcribtion_plan)
    {
        $paymob = new PaymobService;
        $checkout_url = $paymob->checkoutSubscription($subcribtion_plan);
        Cache::put('subscription_plan', $subcribtion_plan->id);
        Cache::put('subscription_amount', $subcribtion_plan);
        return $checkout_url;
    }

    public function renewSubscribtion()
    {
        //
    }
}
