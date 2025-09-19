<?php

namespace App\Http\Controllers\Tenant\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Tenant\TemplateContent;
use App\Models\Tenant\ShopSetting;

class HomeController extends Controller
{
    public function index()
    {
        $settings = new ShopSetting;


        $template = $settings->query()
            ->where('key', 'template')
            ->first();

        $path = json_decode($template->value)->storage_path;

        $template_content = new TemplateContent;
        $slider_content = $template_content->query()->activeSlider()->first();
        $slider = $slider_content?->is_active ? json_decode($slider_content->value) : null;

        return view($path.'.index', [
            'store_name' => ucfirst(tenant('store_name')),
            'slider'     => $slider
        ]);
    }

    public function showProducts()
    {
        $settings = new ShopSetting;

        $template = $settings->query()
            ->where('key', 'template')
            ->first();

        $path = json_decode($template->value)->storage_path;

        return view($path.'.products', [
            'store_name' => ucfirst(tenant('store_name')),
        ]);
    }
}
