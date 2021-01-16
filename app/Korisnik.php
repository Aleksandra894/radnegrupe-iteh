<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Korisnik extends Model
{
    protected $table = "korisnik";
    public $timestamps = false;

    public function grupa()
    {
        return $this->belongsTo('App\Grupa', 'grupa_id', 'id');
    }
}
