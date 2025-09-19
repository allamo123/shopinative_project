<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;
use App\Http\Middleware\HandleInertiaRequest;
use App\Http\Middleware\RedirectAuthenticatedUser;
use App\Http\Middleware\EnsureUserIsSubscribed;
use App\Http\Middleware\IsBussinessSetup;
use App\Http\Middleware\StoreFrontMiddleware;
use App\Http\Middleware\TenantDashboardMiddleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {

        $middleware->redirectGuestsTo(fn (Request $request) => route('login.show'));

        $middleware->web([
            HandleInertiaRequest::class,
        ]);

        $middleware->alias([
            'isSubscribed'   => EnsureUserIsSubscribed::class,
            'guest.redirect' => RedirectAuthenticatedUser::class,
            'isBussiness'    => IsBussinessSetup::class,
            'storeFrontend'  => StoreFrontMiddleware::class,
            'storeDashboard' => TenantDashboardMiddleware::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
