<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IndustrySeeder extends Seeder
{
    public function run(): void
    {
        DB::table('industries')->insert([
            [
                'name' => 'Fashion',
                'slug' => 'fashion',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Electronics',
                'slug' => 'electronics',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Grocery',
                'slug' => 'grocery',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
