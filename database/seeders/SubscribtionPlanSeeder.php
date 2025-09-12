<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscribtionPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscribtion_plans = [
            [
                'duration'               => 'monthly',
                'display_name'           => 'monthly',
                'local_price'            => 499.00,
                'internation_price'      => 19.99,
                'created_at'             => now(),
                'updated_at'             => now(),
            ],
            [
                'duration'          => 'six_months',
                'display_name'      => '6 months',
                'local_price'       => 2499.00,
                'internation_price' => 99.99,
                'created_at'        => now(),
                'updated_at'        => now(),
            ],
            [
                'duration'          => 'yearly',
                'display_name'      => 'yearly',
                'local_price'       => 4499.00,
                'internation_price' => 179.99,
                'created_at'        => now(),
                'updated_at'        => now(),
            ],
        ];

        SubscriptionPlan::insert($subscribtion_plans);
    }
}
