<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;
use App\Http\Controllers\Tenant\HomeController;
use App\Http\Controllers\GeneralSetupController;

use App\Http\Controllers\Auth\AuthenticationController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\ResetPasswordController;


/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware([
    'web',
    InitializeTenancyByDomain::class,
    PreventAccessFromCentralDomains::class,
])->group(function () {

    // authentication routes
    Route::middleware('guest.redirect')->group(function () {
        Route::get('login', [AuthenticationController::class, 'showLoginForm'])->name('login.show');
        Route::post('login', [LoginController::class, 'login'])->name('user.login');
        Route::get('forgot/password', [ResetPasswordController::class, 'showResetForm'])->name('forgot.password');
    Route::post('forgot/password', [ResetPasswordController::class, 'resetPassword'])->name('reset.password.link');

    Route::get('/reset-password/{token}', [ResetPasswordController::class, 'setNewPassword'])->name('password.reset');
    Route::post('password/update', [ResetPasswordController::class, 'updatePassword'])->name('password.update');
    });

    // autourized routes
    Route::middleware(['auth', 'verified'])->group(function () {
        // bussiness setup routes
        Route::prefix('shop-setup')->group(function() {
            Route::resource('general', GeneralSetupController::class)->names('setup');
        });

        // dashboard routes
        Route::middleware(['isSubscribed', 'isBussiness'])->group(function () {
            Route::get('/dashboard', [HomeController::class, 'index'])->name('tenant.home');
        });
    });

});
