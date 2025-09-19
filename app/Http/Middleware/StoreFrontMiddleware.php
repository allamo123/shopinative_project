<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class StoreFrontMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $store_domain = tenant()->domains()
            ->where('type', 'store')
            ->first()
            ->domain;

        if ($store_domain !== request()->host()) {
           abort(404);
        }

        return $next($request);
    }
}
