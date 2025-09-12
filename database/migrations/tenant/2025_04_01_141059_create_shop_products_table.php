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

            $table->uuid('category_id');

            $table->foreign('category_id')
                  ->references('id')
                  ->on('categories')
                  ->onDelete('cascade')
                  ->onUpdate('cascade');

            $table->uuid('sub_category_id')->nullable();
            $table->foreign('sub_category_id')
                  ->references('id')
                  ->on('categories')
                  ->onDelete('cascade')
                  ->onUpdate('cascade');

            $table->unsignedBigInteger('offer_id')->nullable();
            $table->foreign('offer_id')->references('id')->on('shop_offers')->onDelete('cascade')->onUpdate('cascade');

            $table->string('name');
            $table->string('slug');
            $table->tinyText('short_description');
            $table->text('full_description');
            $table->text('how_to_use')->nullable();
            $table->integer('stock');
            $table->integer('sold_qty')->nullable();
            $table->float('original_price', 10,2);
            $table->float('sell_price', 10,2);
            $table->float('discount_amount', 10,2)->default(0);
            $table->float('customer_price', 10,2);
            $table->float('profit', 10,2)->default(0);
            $table->boolean('has_tax')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shop_products');
    }
};
