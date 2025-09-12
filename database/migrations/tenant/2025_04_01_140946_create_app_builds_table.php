<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('app_builds', function (Blueprint $table) {
            $table->id();
            $table->string('app_name');
            $table->string('app_slug');
            $table->string('android_app_url')->nullable();
            $table->string('ios_app_url')->nullable();
            $table->string('android_version')->default('1.0.0');
            $table->string('ios_version')->default('1.0.0');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('app_builds');
    }
};
