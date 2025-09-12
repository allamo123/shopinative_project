<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Tenant\ShopSetting;

class IsBussinessSetup
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        $activeBussiness = ShopSetting::query()->where('key', 'store_name')->first();

        if (!$activeBussiness) {
            return to_route('setup.index');
        }

        return $next($request);
    }
}
