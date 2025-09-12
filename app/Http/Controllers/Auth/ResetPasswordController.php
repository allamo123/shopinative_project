<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;
use App\Models\User;
use Inertia\Inertia;

class ResetPasswordController extends Controller
{

    public function showResetForm(Request $request)
    {
        return Inertia::render('Authentication::PasswordReset/index');
    }

    public function resetPassword(Request $request)
    {
        $request->validate(['email' => 'required|email|exists:users,email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status !== Password::PasswordReset) {
            return back()->withErrors(['email' => [__($status)]]);
        }

        return redirect()->route('login.show')->with('success', __($status));
    }

    public function setNewPassword(string $token)
    {
        return Inertia::render('Authentication::PasswordReset/UpdatePassword', [
            'token' => $token
        ]);
    }

    public function updatePassword(Request $request)
    {
        $request->validate([
            'token'     => 'required',
            'email'     => 'required|email|exists:users,email',
            'password'  => 'required|string|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => bcrypt($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        if ($status !== Password::PasswordReset) {
            return back()->withErrors(['email' => [__($status)]]);
        }

        session()->flash('success', 'password has been updated successfully!');
        return redirect()->route('login.show');
    }

}
