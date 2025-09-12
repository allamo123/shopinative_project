<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

use Inertia\Inertia;

class EmailVerificationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return Inertia::render('auth.verification');
    }

    public function verify(EmailVerificationRequest $request)
    {
        $request->fulfill();

        return to_route('subscribtion.index');
    }

    public function resendVerificationEmail(Request $request)
    {
        $request->user()->sendEmailVerificationNotification();
        session()->flash('success', 'Verification link sent!');
        return back();
    }

}
