<?php

namespace App\Models\Tenant;

use Spatie\MediaLibrary\MediaCollections\Models\Media as BaseMedia;

class Media extends BaseMedia
{
    // Use the tenant database connection
    protected $connection = 'tenant';
}
