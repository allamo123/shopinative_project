<?php

namespace App\Models;


use Stancl\Tenancy\Database\Models\Tenant as BaseTenant;
use Stancl\Tenancy\Contracts\TenantWithDatabase;
use Stancl\Tenancy\Database\Concerns\HasDatabase;
use Stancl\Tenancy\Database\Concerns\HasDomains;


class Tenant extends BaseTenant implements TenantWithDatabase
{
    use HasDatabase, HasDomains;

    public function getDatabaseName(): string
    {
        return config('app.name').'_'.$this->id;
    }

    public static function getCustomColumns(): array
    {
        return [
            'id',
            'user_id',
            'store_name',
            'industry_id',
            'template_id',
            'is_active',
        ];
    }

    /**
     * Get the user associated with the Tenant
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the template associated with the Tenant
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function template()
    {
        return $this->belongsTo(Template::class);
    }


    public function subscriptions()
    {
        return $this->hasMany(Subscription::class, 'tenant_id');
    }

    /**
     * Get the aciveSubscription ad with the User
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function activeSubscription()
    {
        return $this->hasOne(Subscription::class, 'tenant_id')
                    ->where('active', true);
    }
}
