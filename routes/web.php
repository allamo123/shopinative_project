<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\AuthenticationController;
use App\Http\Controllers\Auth\RegisterController;



foreach (config('tenancy.central_domains') as $domain) {
    Route::domain($domain)->group(function () {
        Route::get('/', function () {
            return 'welcome';
        });

        // registeration routes
        Route::middleware(['guest.redirect'])->group(function () {
            Route::get('registeration', [AuthenticationController::class, 'showRegistrationForm'])->name('registeration.show');
            Route::post('registeration', [RegisterController::class, 'register'])->name('registeration.submit');
        });
    });
}

// use App\Jobs\BuildMobileApp;

// Route::get('test-build-mobile-app', function () {

//     BuildMobileApp::dispatch();

//     return response()->json([
//         'success' => true,
//         'msg'     => 'Build process started...',
//     ], 200);
// });



// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


require __DIR__.'/auth.php';
