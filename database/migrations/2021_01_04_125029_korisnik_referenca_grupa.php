<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class KorisnikReferencaGrupa extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('korisnik', function (Blueprint $table) {
            $table->unsignedBigInteger('grupa_id');
            $table->foreign('grupa_id')->references('id')->on('grupa')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('korisnik', function (Blueprint $table) {
            $table->dropForeign('korisnik_grupa_id_foreign');
        });
    }
}
