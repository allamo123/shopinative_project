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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('shop_order_id')->constrained('shop_orders')->onDelete('cascade')->onUpdate('cascade');
            $table->integer('invoice_number')->unique();
            $table->string('color')->nullable();
            $table->string('size')->nullable();
            $table->float('sell_price', 10,2);
            $table->float('discount_price', 10,2);
            $table->float('total_price', 10,2);
            $table->float('tax_amount', 10,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
