<?php

return [
    "ApiKey" => env('PAYMOB_KEY'),
    'PublicKey'=> env('PAYMOB_PUBLIC_KEY'),
    'hmac' => env('PAYMOB_HMAC_SECRET')  
];