<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Routing\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
   /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers {
        logout as performLogout;
    }

    protected function validateLogin(Request $request)
    {
        $request->validate([
            $this->username() => [
                'required',
                'string',
                'email',
                function ($attribute, $value, $fail) {
                    $tenant_email = tenant()->user->email;
                    if($tenant_email !== $value) {
                        $fail('Invalid credentials for this domain.');
                    }
                }
            ],
            'password' => ['required', 'string'],
        ]);
    }

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected function redirectTo()
    {
        return route('tenant.home');
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }


    public function logout(Request $request)
    {
        $this->performLogout($request);
        return redirect()->route('login.show');
    }

    /**
    * Redirect the user to the social channel authentication page.
    *
    * @return \Illuminate\Http\Response
    */
    public function redirectToProvider(Request $request, $provider, $type)
    {
        Cache::forever('target_auth', 'customer');
        Cache::forever('auth_type', $type);

        // return Socialite::driver($provider)->redirect();
    }
}
