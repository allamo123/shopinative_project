<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'description',
        'category_id',
        'type',
        'is_featured',
        'display_order',
        'is_active',
    ];

    public function products()
    {
        return $this->belongsToMany(ShopProduct::class, 'categories_shop_products', 'category_id', 'shop_product_id');
    }
}
