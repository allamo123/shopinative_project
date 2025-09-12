<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Routing\Controller;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\Events\Registered;
use App\Helpers\GeoHelper;
use App\Models\RegisterCountry;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Stancl\Tenancy\Database\Models\Domain;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected function redirectTo()
    {
        return route('subscribtion.index');
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return Modules\Company\Entities\CompanyUser
     */
    protected function create(array $data)
    {

        try {
            DB::beginTransaction();

            $country = $this->detectCountry();

            $user = User::create([
                'first_name'            => $data['first_name'],
                'last_name'             => $data['last_name'],
                'email'                 => $data['email'],
                'register_country_id'   => $country->id,
                'password'              => Hash::make($data['password']),
            ]);

            event(new Registered($user));

            DB::commit();

            return $user;

        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        }
    }

    protected function detectCountry()
    {
        // $ip = request()->ip();
        $ip = '197.134.173.153';
        $GeoHelper    = new GeoHelper;
        $country_name = $GeoHelper->getCountryName($ip);

        $is_country_exist = RegisterCountry::where('name', $country_name)
        ->first();

        // dd($is_country_exist);

        if ($is_country_exist) {
            return $is_country_exist;
        }

        $new_country = RegisterCountry::create([
            'name'   => $country_name,
        ]);

        return $new_country;
    }
}
