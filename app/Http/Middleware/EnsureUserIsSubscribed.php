<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class EnsureUserIsSubscribed
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        $active_subscribtion = tenant()->activeSubscription()->count();

        if (!$active_subscribtion) {
            return to_route('subscribtion.index');
        }

        return $next($request);
    }
}
