<?php

namespace App\Services;

use App\Http\Interfaces\PaymobInterface;
use Illuminate\Support\Facades\Http;


class PaymobService implements PaymobInterface
{
    private $apiKey;

    public function __construct()
    {
        $this->apiKey = config('paymob.ApiKey');
    }

    public function checkoutSubscription($plan)
    {
        $token = $this->getApiToken();

        if (!$token) {
            dd('no token');
        }

        $subscribtion_plan = $this->getTargetPaymobSubscribtionPlan($plan->display_name, $token);

        try {
            $response = Http::withoutVerifying()
            ->withToken('egy_sk_test_018f383483567d2df55f23e8c3d54dcee65a915429ffbc61714bc0964b7e094c')
            ->post('https://accept.paymob.com/v1/intention/', [
                'amount' => (int) $subscribtion_plan['amount_cents'],
                'currency' => auth()->user()->registerCountry->name === 'Egypt' ? 'EGP' : 'USD',
                'payment_methods' => [3072739, 3072746], // your 3DS Integration ID
                'subscription_plan_id' => $subscribtion_plan['id'],
                // 'subscription_start_date' => '2025-04-09', // optional
                'items' => [
                    [
                        'name'        => $subscribtion_plan['name'],
                        'amount'      => (int) $subscribtion_plan['amount_cents'],
                        'description' => 'shopinative membership',
                        'quantity'    => 1
                    ]
                ],
                'billing_data' => [
                    'first_name' => auth()->user()->first_name,
                    'last_name'  => auth()->user()->last_name,
                    'email'      => auth()->user()->email,
                    'phone_number' => '01000021630',
                ],
                // 'special_reference' => 621732,
                // 'subscriptionv2_id' => null // optional
            ]);

            if ($response->status() === 401) {
                dd("Unauthorized: Check your token or headers", $response->json());
            }

            $publicKey = config('paymob.PublicKey');
            $clientSecret = $response['client_secret'];
            // dd($response->json());

            // Form the Unified Checkout URL with publicKey and clientSecret
            $checkoutUrl = "https://accept.paymob.com/unifiedcheckout/?publicKey=$publicKey&clientSecret=$clientSecret";
            return $checkoutUrl;

        } catch (\Throwable $th) {
            return null;
        }

    }

    private function getApiToken()
    {
        try {
            $response = Http::withoutVerifying()->post('https://accept.paymob.com/api/auth/tokens', [
                'api_key' => config('paymob.ApiKey'),
            ]);
            $authToken = $response->json()['token'] ?? null;
            return $authToken;
        } catch (\Throwable $th) {
            return null;
        }

    }

    private function getTargetPaymobSubscribtionPlan($planName, $token)
    {

        try {
            $response = Http::withoutVerifying()->withToken($token)->get('https://accept.paymob.com/api/acceptance/subscription-plans');

            $target_plan = array_filter($response->json()['results'], function ($plan) use($planName) {
                if ($plan['name'] == "$planName egyptian subscription" && $plan['is_active']) {
                    return $plan;
                }
            });

            $first_key = array_key_first($target_plan);
            return $target_plan[$first_key];

        } catch (\Throwable $th) {
            return null;
        }
    }

    public function verifyPaymobHMAC(Array $data)
    {
        $hmacSecret = config('paymob.hmac');

        // Required fields in exact order (check Paymob docs for correct fields)
        $keys = [
            "amount_cents",
            "created_at",
            "currency",
            "error_occured",
            "has_parent_transaction",
            "id",
            "integration_id",
            "is_3d_secure",
            "is_auth",
            "is_capture",
            "is_refunded",
            "is_standalone_payment",
            "is_voided",
            "order",
            "owner",
            "pending",
            "source_data_pan",
            "source_data_sub_type",
            "source_data_type",
            "success"
        ];

        $concatenatedString = '';
        foreach ($keys as $key) {
            $concatenatedString .= $data[$key] ?? '';
        }

        $calculatedHmac = hash_hmac('sha512', $concatenatedString, $hmacSecret);

        return $calculatedHmac === $data['hmac'];
    }

    public function failedAuthrizedPaymentRedirection()
    {
        session()->flash('error', 'Sorry, the payment has been failed');
        return to_route('subscribtion.index');
    }
}
