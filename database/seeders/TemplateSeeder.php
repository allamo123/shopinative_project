<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TemplateSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('templates')->insert([
            [
                'name' => 'Modern UI',
                'slug' => 'modern',
                'industry_id' => 1,
                'description' => 'Clean and modern design with grid layout',
                'preview_url' => '/images/templates/modern.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Classic UI',
                'slug' => 'classic',
                'industry_id' => 1,
                'description' => 'Traditional storefront look with sidebar menu',
                'preview_url' => '/images/templates/classic.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
