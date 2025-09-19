<?php

namespace Database\Seeders\Tenant\Themes\Fashion\Default;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tenant\Category;
// Make sure the Category model exists at app/Models/Tenant/Category.php

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $mainCategories = [
            [
                'name' => 'Accessories',
                'slug' => 'accessories',
                'description' => 'Discover a wide range of fashion accessories including bags, belts, hats, scarves, sunglasses, and more. Our collection features the latest trends and timeless classics to complement every outfit and occasion. Whether you are looking for statement pieces or subtle additions, our accessories are crafted to enhance your personal style and provide the perfect finishing touch.',
                'display_order' => 1,
                'is_active' => true,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Clothing',
                'slug' => 'clothing',
                'description' => 'Explore our clothing collection featuring the latest styles and timeless essentials for men, women, and children. From casual wear to formal attire, our selection is designed to suit every occasion and personal taste.',
                'display_order' => 2,
                'is_active' => true,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jewellery',
                'slug' => 'jewellery',
                'description' => 'Discover exquisite jewellery pieces including rings, necklaces, earrings, and more. Our jewellery collection combines elegance and craftsmanship to help you express your unique style.',
                'display_order' => 3,
                'is_active' => true,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Shoes',
                'slug' => 'shoes',
                'description' => 'Step out in style with our range of shoes for every occasion. From casual sneakers to formal footwear, our collection offers comfort and fashion for men, women, and children.',
                'display_order' => 4,
                'is_active' => true,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Collections',
                'slug' => 'collections',
                'description' => 'Browse curated collections featuring seasonal trends, exclusive designs, and must-have items. Our collections are tailored to inspire and elevate your wardrobe.',
                'display_order' => 5,
                'is_active' => true,
                'is_featured' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Sale',
                'slug' => 'sale',
                'description' => 'Shop our sale section for the best deals on fashion, accessories, and more. Enjoy discounts on top-quality items while stocks last.',
                'display_order' => 6,
                'is_active' => true,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Category::insert($mainCategories);

        $mainIds = Category::whereIn('slug', ['Clothing', 'Jewellery'])->pluck('id', 'slug');


        $subCategories = [
            [
                'name' => 'Men',
                'slug' => 'men-clothing',
                'description' => 'Explore our extensive men\'s clothing collection, featuring everything from casual wear to formal attire. Discover the latest trends in shirts, trousers, jackets, and outerwear, crafted from high-quality materials for comfort and style. Whether you are dressing for work, leisure, or special occasions, our men\'s range offers versatile options to suit every preference and season.',
                'type' => 'sub',
                'category_id' => $mainIds['clothing'],
                'display_order' => 1,
                'is_active' => true,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Women',
                'slug' => 'women-clothing',
                'description' => 'Discover our women\'s clothing collection, designed to celebrate every style and silhouette. From elegant dresses and chic tops to comfortable loungewear and activewear, our selection combines fashion-forward designs with timeless classics. Enjoy a variety of fabrics, colors, and fits that empower you to express your individuality and feel confident every day.',
                'type' => 'sub',
                'category_id' => $mainIds['clothing'],
                'display_order' => 2,
                'is_active' => true,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Child',
                'slug' => 'child-clothing',
                'description' => 'Browse our children\'s clothing collection, offering comfortable and stylish options for boys and girls of all ages. From playful prints and vibrant colors to durable everyday essentials, our range is designed to keep kids looking great and feeling comfortable. Find outfits for school, playtime, and special occasions, all crafted with care and attention to detail.',
                'type' => 'sub',
                'category_id' => $mainIds['clothing'],
                'display_order' => 3,
                'is_active' => true,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Ring',
                'slug' => 'ring',
                'description' => 'Discover our stunning ring collection, featuring designs for every taste and occasion. From classic bands and sparkling solitaires to intricate statement pieces, our rings are crafted with precision and artistry. Whether you are celebrating a milestone or simply adding a touch of elegance to your look, our selection offers timeless beauty and exceptional quality.',
                'type' => 'sub',
                'category_id' => $mainIds['jewellery'],
                'display_order' => 1,
                'is_active' => true,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Necklaces',
                'slug' => 'necklaces',
                'description' => 'Elevate your style with our exquisite necklace collection, featuring a variety of designs from delicate chains to bold statement pieces. Each necklace is crafted to enhance your look, whether you prefer minimalist elegance or eye-catching glamour. Perfect for layering or wearing solo, our necklaces make memorable gifts and cherished additions to any jewelry box.',
                'type' => 'sub',
                'category_id' => $mainIds['jewellery'],
                'display_order' => 2,
                'is_active' => true,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Earrings',
                'slug' => 'earrings',
                'description' => 'Explore our diverse earrings collection, offering styles for every mood and occasion. From classic studs and elegant hoops to dramatic drop earrings and contemporary designs, our selection is crafted to complement any outfit. Enjoy high-quality materials and expert craftsmanship that ensure comfort, durability, and lasting shine.',
                'type' => 'sub',
                'category_id' => $mainIds['jewellery'],
                'display_order' => 3,
                'is_active' => true,
                'is_featured' => false,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];

        Category::query()->insert($subCategories);

    }
}
