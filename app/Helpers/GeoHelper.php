<?php

namespace App\Helpers;

use GeoIp2\Database\Reader;

class GeoHelper
{
    public function getCountryName($ip) 
    {
        $reader = new Reader(base_path('GeoLite2-Country.mmdb'));

        try {
            $record   = $reader->country($ip);
           return  $record->country->name;
        } catch (\GeoIp2\Exception\AddressNotFoundException $e) {
            return null;
        }
    }
}
