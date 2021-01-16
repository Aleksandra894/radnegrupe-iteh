<?php

namespace App\Http\Controllers;

use App\Grupa;
use App\Korisnik;
use Illuminate\Http\Request;

class KorisnikController extends Controller
{
    public function get_korisnici(Request $request)
    {


        $id = $request->input('id'); // id grupe
        $korisnici = Grupa::find($id)->korisnici()->get();

        return response()->json([
            'korisnici' => $korisnici
        ]);
    }

    public function izmeni_email(Request $request)
    {
        $id = $request->input('id');
        $email_korisnik = $request->input('email_korisnik');
        Korisnik::where('id', $id)->update(['email_korisnik' => $email_korisnik]);
    }

    public function dodaj_korisnika(Request $request)
    {
        $ime_korisnik = $request->input('ime_korisnik');
        $email_korisnik = $request->input('email_korisnik');
        $grupa_id = $request->input('grupa_id');

        $id = Korisnik::insertGetId([
            'ime_korisnik' => $ime_korisnik,
            'email_korisnik' => $email_korisnik,
            'grupa_id' => $grupa_id
        ]);
        Grupa::find($grupa_id)->increment('broj_prijavljenih');

        return response()->json([
            'id' => $id,
        ]);
    }

    public function delete_korisnik(Request $request)
    {
        $id = $request->input('id');
        $grupa_id = Korisnik::find($id)->grupa()->get(["id"])[0]->id;
        Korisnik::find($id)->delete();
        Grupa::find($grupa_id)->decrement('broj_prijavljenih');
    }
}
