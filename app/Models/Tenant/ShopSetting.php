<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class ShopSetting extends Model
{
    protected $fillable = [
        'key',
        'value',
        'type',
    ];
}
