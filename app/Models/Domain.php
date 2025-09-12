<?php

namespace App\Models;

use Stancl\Tenancy\Database\Models\Domain as BaseDomain;
use Stancl\Tenancy\Database\Concerns\CentralConnection;

class Domain extends BaseDomain
{
    use CentralConnection;

    public static function getCustomColumns(): array
    {
        return [
            'domain',
            'type',
            'tenant_id',
        ];
    }
}
