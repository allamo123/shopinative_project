<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ShopProduct extends Model implements HasMedia
{
    use InteractsWithMedia;

    protected $fillable = [
        'name','slug','short_description','full_description',
        'how_to_use','stock','sold_qty','cost_price','sale_price',
        'discount_amount','final_price','profit','sku','is_featured','is_active'
    ];

    protected static function booted()
    {
        static::saving(function ($product) {

            if ($product->discount_amount > 0) {
                $product->final_price = $product->sale_price - $product->discount_amount;
            }
            else {
                $product->final_price = $product->sale_price;
            }

            $product->profit = $product->final_price - $product->cost_price;
        });
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('images')
             ->useDisk('tenant_media')
             ->withResponsiveImages();
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'categories_shop_products', 'shop_product_id', 'category_id');
    }
}
