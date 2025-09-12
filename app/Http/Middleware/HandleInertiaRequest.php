<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Middleware;
// use tightenco\ziggy\Ziggy;

class HandleInertiaRequest extends Middleware
{
    public function rootView(Request $request)
    {
        if ($request->is('admin/*')) {
            dd(0);
        }

        return 'app'; // Default fallback
    }

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'app' => [
                'name' => config('app.name'),
                'domain'  => config('tenancy.central_domains')
            ],
            'auth' => [
                'user' => $request->user()?->load(['registerCountry']),
            ],
            // 'ziggy' => function () {
            //     return (new Ziggy)->toArray();
            // },
            'flashMsg' => function () use ($request) {
                return [
                    'success' => $request->session()->pull('success', null),
                    'error' => $request->session()->pull('error', null),
                ];
            },
        ]);
    }
}
