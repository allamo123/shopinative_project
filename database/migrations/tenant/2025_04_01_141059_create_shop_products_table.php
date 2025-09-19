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
        Schema::create('shop_products', function (Blueprint $table) {

            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->tinyText('short_description');
            $table->text('full_description');
            $table->text('how_to_use')->nullable();
            $table->integer('stock');
            $table->integer('sold_qty')->default(0);
            $table->decimal('cost_price', 10, 2);
            $table->decimal('sale_price', 10, 2);
            $table->decimal('discount_amount', 10, 2)->default(0);
            $table->decimal('final_price', 10, 2);
            $table->decimal('profit', 10, 2)->default(0);
            $table->string('sku')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('shop_products', function (Blueprint $table) {
            $table->dropForeign(['category_id']);
            $table->dropForeign(['sub_category_id']);
            $table->dropForeign(['offer_id']);
            $table->dropForeign(['brand_id']);
        });

        Schema::dropIfExists('shop_products');
    }
};
