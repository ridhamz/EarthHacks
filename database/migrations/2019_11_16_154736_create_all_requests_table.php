<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAllRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('all_requests', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('quantity');
            $table->string('adress');
            $table->string('disc');
            $table->string('restoname');
            $table->string('etat')->nullable()->default('Not valid');
            //$table->string('acceptby')->nullable()->default('no one');
            $table->bigInteger('Resto_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('all_requests');
    }
}
