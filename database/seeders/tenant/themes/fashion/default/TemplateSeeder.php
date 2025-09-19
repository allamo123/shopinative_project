<?php

namespace Database\Seeders\Tenant\Themes\Fashion\Default;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TemplateSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ContentSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class,
        ]);
    }
}
