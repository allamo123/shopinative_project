<?php

namespace App\Http\Interfaces;

interface PaymobInterface
{
    public function checkoutSubscription($plan);
    public function verifyPaymobHMAC(Array $data);
    public function failedAuthrizedPaymentRedirection();
}
