<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubscriptionPlan extends Model
{
    protected $fillable = [
        'duration',
        'display_name',
        'local_price',
        'internation_price',
    ];

    /**
     * Get the subscribers associated with the SubscriptionPlan
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function subscribtions()
    {
        return $this->hasMany(Subscription::class, 'subscription_plan_id');
    }
}
