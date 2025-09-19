<?php

namespace Database\Seeders\Tenant\Themes\Fashion\Default;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tenant\TemplateContent;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $templateContents = [
            [
                'key' => 'slider-content',
                'value' => json_encode([
                    'slides' => [
                        [
                            'image' => 'themes/fashion/default/images/slideshow-banners/home2-default-banner1.jpg',
                            'title' => 'Welcome to Our Store',
                            'subtitle' => 'Discover the latest trends',
                            'link' => '/shop/products',
                            'link_text' => 'shop now',
                        ],
                        [
                            'image' => 'themes/fashion/default/images/slideshow-banners/home2-default-banner2.jpg',
                            'title' => 'Our New Collection',
                            'subtitle' => 'Save up to 50% Off',
                            'link' => '/shop/new-arrivals',
                            'link_text' => 'Discover now',
                        ],
                    ],
                ], JSON_PRETTY_PRINT),
            ],
        ];

        $template = new TemplateContent();

        $template->query()->insert($templateContents);
    }
}
