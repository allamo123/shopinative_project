<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrencySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('currencies')->insert([
            [
                'name' => 'Egyptian Pound',
                'code' => 'EGP',
                'symbol' => '£',
                'image'  => 'images/icons/countries/egypt.png',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'US Dollar',
                'code' => 'USD',
                'symbol' => '$',
                'image'  => 'images/icons/countries/usa.png',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Euro',
                'code' => 'EUR',
                'symbol' => '€',
                'image'  => 'images/icons/countries/europe.png',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'British Pound',
                'code' => 'GBP',
                'symbol' => '£',
                'image'  => 'images/icons/countries/british.png',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Japanese Yen',
                'code' => 'JPY',
                'symbol' => '¥',
                'image'  => 'images/icons/countries/japan.png',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Kuwaiti Dinar',
                'code' => 'KWD',
                'symbol' => 'KD',
                'is_active' => true,
                'image'  => 'images/icons/countries/kuwait.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Saudi Riyal',
                'code' => 'SAR',
                'symbol' => '﷼',
                'image'  => 'images/icons/countries/suadi.png',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'United Arab Emirates Dirham',
                'code' => 'AED',
                'symbol' => 'د.إ',
                'is_active' => true,
                'image'  => 'images/icons/countries/emirates.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
