<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RegisterCountry extends Model
{
    protected $fillable = [
        'name',
    ];

    /**
     * Get all of the users for the RegisterCountry
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function users()
    {
        return $this->hasMany(User::class, 'register_country_id');
    }
}
