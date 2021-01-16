<?php

use App\Grupa;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class KorisnikTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 20; $i++) {

            $grupa_id = rand(1, GrupaTableSeeder::$grupe);
            DB::table('korisnik')->insert([
                'ime_korisnik' => strtoupper(Str::random(1)) . strtolower(Str::random(5)) . " " . strtoupper(Str::random(1)) . strtolower(Str::random(4))   . "ic",
                'email_korisnik' => Str::random(6) . "@gmail.com",
                'grupa_id' => $grupa_id
            ]);
            Grupa::find($grupa_id)->increment('broj_prijavljenih');
        }
    }
}
