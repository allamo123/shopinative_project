<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class TemplateContent extends Model
{
    protected $fillable = [
        'key',
        'value',
        'is_active'
    ];

    public function scopeActiveSlider($query)
    {
        return $query->where('key', 'slider-content')->where('is_active', true);
    }
}
