<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

use App\Http\Requests\Setup\GeneralStoreRequest;
use App\Models\Tenant\ShopSetting;
use App\Models\Domain;

class GeneralSetupController extends Controller
{
    public function __construct(private ShopSetting $shop_setting)
    {}

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('settings');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GeneralStoreRequest $request)
    {
        $data = $request->validated();
        $data['store_domain'] .= '.'.config('tenancy.central_domains')[0];

        $setting_data = $this->parseSettingsData($data);

        $central = DB::connection(config('tenancy.database.central_connection'));
        $tenant  = DB::connection('tenant');

        try {

            $central->beginTransaction();
            $tenant->beginTransaction();

            Domain::create([
                'domain'    => $data['store_domain'],
                'type'      => 'store',
                'tenant_id' => tenant()->id,
            ]);

            $this->shop_setting->insert($setting_data);

            $central->commit();
            $tenant->commit();

        } catch (\Throwable $th) {

            $central->rollBack();
            $tenant->rollBack();

            Log::error('Store method failed', [
                'exception' => $th,
                'tenant_id' => tenant('id'),
            ]);
        }


        session()->flash('success', 'Congratulation Bussiness has been configured successfully');
        return to_route('tenant.home');
    }


    private function parseSettingsData(array $data): array
    {
        if (isset($data['store_tax'])) {
            $data['store_tax'] = round($data['store_tax'] / 100, 2);
        }

        $setting_data = [];

        foreach ($data as $key => $value) {
            $type = match ($key) {
                'store_tax' => 'decimal',
                default     => gettype($value),
            };

            $setting_data[] = [
                'key'        => $key,
                'value'      => $value,
                'type'       => $type,
                'created_at' => now(),
            ];
        }

        return $setting_data;
    }
}
