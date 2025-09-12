<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\EmailVerificationController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\SubscribtionController;
use App\Models\SubscriptionPlan;
use App\Models\Tenant;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;

use App\Events\SubscriptionCreated;



// MUST BE AUTHENTICATION USER ROUTES
Route::middleware(['auth'])->group(function () {
    // perform logout route
    Route::post('logout', [LoginController::class, 'logout'])->name('logout');

    // email verification routes
    Route::prefix('email')->group(function () {
        Route::get('verify', [EmailVerificationController::class, 'index'])->name('verification.notice');
        Route::get('verify/{id}/{hash}', [EmailVerificationController::class, 'verify'])->middleware(['signed'])->name('verification.verify');
        Route::post('verification-notification', [EmailVerificationController::class, 'resendVerificationEmail'])->middleware(['throttle:6,1'])->name('verification.send');
    });

    // subsctiptions routes
    Route::get('transaction/callback', [SubscribtionController::class, 'handlePayMobCallBack']);

    Route::middleware(['verified'])->prefix('plans')->group(function () {

        Route::get('/', [SubscribtionController::class, 'index'])->name('subscribtion.index');

        // temporary route closure function
        Route::post('checkout', function(Request $request) {

            try {
                DB::beginTransaction();

                $user = auth()->user();

                $subscriptionPlan = SubscriptionPlan::findOrFail($request->plan_id);

                $tenant = Tenant::create([
                    'id'        => Str::random(7),
                    'user_id'   => $user->id,
                ]);

                $subdomain = strtolower(str_replace(' ', '-', $user->first_name . $user->last_name) . '-' . Str::random(4));

                $tenant->domains()->create([
                    'domain' => "{$subdomain}." . config('tenancy.central_domains.0'),
                    'type'   => 'admin'
                ]);

                $subscription = $subscriptionPlan->subscribtions()->create([
                    'tenant_id'           => $tenant->id,
                    'subscription_date' => now()->format('Y-m-d'),
                    'expire_date'       => now()->addMonth(1)->format('Y-m-d'),
                    'price'             => $subscriptionPlan->local_price,
                ]);

                // Optional: Run migrations/seeding here if needed
                tenancy()->initialize($tenant);

                $admin_domain = $tenant->domains()->where('type', 'admin')->first();

                DB::commit();

                event(new SubscriptionCreated($user));

                return Inertia::location('https://' . $admin_domain->domain . '/login');

            } catch (\Throwable $e) {
                DB::rollBack();
                dd($e);
                Log::error('Subscription checkout failed', ['error' => $e->getMessage()]);
                return redirect()->back()->with('error', 'An error occurred during subscription checkout.');
            }
        })->name('subscribtion.checkout');
    });
});

// ADMIN ROUTES
Route::prefix('admin')->group(function () {
    Route::middleware('guest')->group(function() {
        //
    });
});
