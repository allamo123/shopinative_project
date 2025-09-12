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
        Schema::create('shop_products_sizes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shop_product_id')->constrained('shop_products')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('size_id')->constrained('sizes')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('qty');
            $table->integer('sold');
            $table->float('price', 10,2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop_product_size');
    }
};
