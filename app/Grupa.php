<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Grupa extends Model
{
    protected $table = "grupa";
    public $timestamps = false;

    public function korisnici()
    {
        return $this->hasMany('App\Korisnik', 'grupa_id', 'id');
    }
}
