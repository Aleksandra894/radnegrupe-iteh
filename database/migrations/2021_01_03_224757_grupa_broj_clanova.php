<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class GrupaBrojClanova extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('grupa', function (Blueprint $table) {
            $table->integer('broj_prijavljenih');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('grupa', function (Blueprint $table) {
            $table->dropColumn('broj_prijavljenih');
        });
    }
}
