<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Concerns\CentralConnection;

class Currency extends Model
{
    use CentralConnection;

    protected $fillable = [
        'name',
        'code',
        'symbol',
        'image',
        'is_active',
    ];
}
