<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    protected $fillable = [
        'name',
        'slug'
    ];

    public function tenants()
    {
        return $this->hasMany(Tenant::class, 'template_id');
    }
}
