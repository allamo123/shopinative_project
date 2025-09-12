<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Stancl\Tenancy\Jobs\DeleteDatabase;
use App\Models\Tenant;

class DropTenantDatabases extends Command
{
    protected $signature = 'tenants:drop-databases';
    protected $description = 'Drop all tenant databases (DEV ONLY!)';

    public function handle(): void
    {
        if(config('app.env') === 'production') {
            $this->error('cannot drop tenant databases on production .');
            return;
        }

        if (! $this->confirm('⚠️  This will permanently DELETE all tenant databases. Are you sure?')) {
            $this->warn('Operation cancelled.');
            return;
        }

        $tenants = Tenant::all();

        foreach ($tenants as $tenant) {
            DeleteDatabase::dispatchSync($tenant);
            $tenant->user()->delete();
        }

        $this->info('✅ All tenant databases dropped successfully.');
    }
}
