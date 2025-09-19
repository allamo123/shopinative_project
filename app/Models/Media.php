<?php

namespace App\Models;

use Spatie\MediaLibrary\MediaCollections\Models\Media as BaseMedia;
use Stancl\Tenancy\Database\Concerns\CentralConnection;

class Media extends BaseMedia
{
    use CentralConnection;
}
