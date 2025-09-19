<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TenantDashboardMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $dashboard_domain = tenant()->domains()
            ->where('type', 'admin')
            ->first()
            ->domain;

        if ($dashboard_domain !== request()->host()) {
           abort(404);
        }

        return $next($request);
    }
}
