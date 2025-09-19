<?php

namespace App\Helpers;

use Spatie\MediaLibrary\Support\PathGenerator\PathGenerator;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class TenantMediaPathGenerator implements PathGenerator
{
    public function getPath(Media $media): string
    {
        // Determine if tenant exists
        $tenantId = tenant('id') ?? 'central';
        return $tenantId. '/'.$media->collection_name.'/';
    }

    public function getPathForConversions(Media $media): string
    {
        return $this->getPath($media) . 'conversions/';
    }

    public function getPathForResponsiveImages(Media $media): string
    {
        return $this->getPath($media) . 'responsive/';
    }
}
