<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;

class AuthenticationController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('auth.login');
    }

    public function showRegistrationForm(Request $request)
    {
        // $type = $request->input('type');

        return Inertia::render('auth.registeration');
    }

    public function Susspended()
    {
        return Inertia::render('SusspendedAccount');

    }
}
