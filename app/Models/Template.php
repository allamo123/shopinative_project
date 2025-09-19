<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Concerns\CentralConnection;

class Template extends Model
{
    use CentralConnection;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'preview_url',
        'storage_path',
        'industry_id',
        'is_active',
        'is_default'
    ];

    public function tenants()
    {
        return $this->hasMany(Tenant::class, 'template_id');
    }
}
