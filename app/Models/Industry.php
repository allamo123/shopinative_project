<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Concerns\CentralConnection;


class Industry extends Model
{
    use CentralConnection;

    protected $fillable = [
        'name',
        'slug',
        'is_active'
    ];
}
