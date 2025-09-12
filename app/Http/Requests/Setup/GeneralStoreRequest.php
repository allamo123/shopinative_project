<?php

namespace App\Http\Requests\Setup;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Models\Domain;

class GeneralStoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'store_name'     => 'required|string|max:250',
            'store_domain'   => [
                'required',
                'string',
                'max:250',
                function ($attribute, $value, $fail) {

                    $domain = $value.'.'.config('tenancy.central_domains')[0];

                    $tenant_domains = Domain::on('central')
                        ->where('type', 'store');

                    $domain_exists = $tenant_domains->where('domain', $domain)->exists();

                    if ($tenant_domains->count()) {
                        $fail('already have one domain');
                    }

                    if ($domain_exists) {
                        $fail('The domain has already been taken.');
                    }
                },

            ],
            'store_tax'            => 'required|numeric',
            'store_phone'          => 'required|numeric|max_digits:11|unique:shop_settings,value',
            'store_email'          => ['required', 'email', Rule::unique('shop_settings', 'value')->where('key', 'store_email')],
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
}
