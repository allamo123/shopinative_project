<?php

namespace Database\Seeders\Tenant\Themes\Fashion\Default;

use Illuminate\Database\Seeder;
use App\Models\Tenant\ShopProduct;
use App\Models\Tenant\Category;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $categories = Category::all();
        $products = [];
        $pivot = [];

        foreach ($categories as $category) {
            for ($i = 1; $i <= 30; $i++) {
                $productName = $category->name . ' Product ' . $i;
                $sku = strtoupper(Str::random(8));

                $cost_price = rand(5, 50);
                $discount_amount = rand(0, 20);
                $sale_price = rand(5, 50);
                $final_price = $discount_amount > 0 ? $sale_price - $discount_amount : $sale_price;

                $products[] = [
                    'name' => $productName,
                    'slug' => Str::slug($productName),
                    'short_description' => 'Short description for ' . $productName,
                    'full_description' => 'Full description for ' . $productName . '. This is a detailed overview of the product, including its features, benefits, and usage scenarios. It is designed to provide customers with all the information they need to make an informed purchase. The product stands out for its quality, reliability, and value, making it a popular choice among shoppers. Explore more about ' . $productName . ' and discover why it is highly recommended in its category.',
                    'how_to_use' => 'Instructions for ' . $productName,
                    'stock' => rand(20, 100),
                    'sold_qty' => rand(20, 100),
                    'cost_price' => $cost_price,
                    'sale_price' => $sale_price,
                    'discount_amount' => $discount_amount,
                    'final_price' => $final_price,
                    'profit' => $final_price - $cost_price,
                    'sku' => $sku,
                    'is_featured' => rand(0,1),
                    'is_active' => true,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        ShopProduct::query()->insert($products);

        $allProducts = ShopProduct::all();

        foreach ($categories as $category) {
            $categoryProducts = $allProducts->filter(function($p) use ($category) {
                return Str::startsWith($p->name, $category->name);
            });

            foreach ($categoryProducts as $product) {
                $pivot[] = [
                    'category_id' => $category->id,
                    'shop_product_id' => $product->id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ];
            }
        }

        // Insert pivot table
        DB::table('categories_shop_products')->insert($pivot);
    }
}
