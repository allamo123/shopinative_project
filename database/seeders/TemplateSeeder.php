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
                'name'          => 'Modern UI',
                'slug'          => 'modern',
                'industry_id'   => 1,
                'description'   => 'Clean and modern design with grid layout',
                'preview_url'   => '/images/templates/modern.png',
                'storage_path'  => 'themes.fashion.default',
                'is_default'    => true,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'name' => 'Classic UI',
                'slug' => 'classic',
                'industry_id' => 2,
                'description' => 'Traditional storefront look with sidebar menu',
                'preview_url' => '/images/templates/classic.png',
                'storage_path'  => 'themes.electronics.default',
                'is_default'    => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Demo',
                'slug' => 'demo',
                'industry_id' => 3,
                'description' => 'Traditional storefront look with sidebar menu',
                'preview_url' => '/images/templates/classic.png',
                'storage_path'  => 'theme.grocery.default',
                'is_default'    => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
