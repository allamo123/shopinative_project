<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RedirectAuthenticatedUser
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::check()) {

            if (tenant()) {
                return to_route('tenant.home');
            }

            $tenant = auth()->user()->tenant;
            $admin_domain = $tenant->domains->where('type', 'admin')->first();
            return Inertia::location('https://'.$admin_domain->domain.'/dashboard');
        }

        return $next($request);
    }
}
