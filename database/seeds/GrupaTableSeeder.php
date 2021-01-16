<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class GrupaTableSeeder extends Seeder
{

    public static $grupe = 10;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < GrupaTableSeeder::$grupe; $i++) {
            DB::table('grupa')->insert([
                'naziv_grupa' => Str::random(6) . "_GRUPA",
                'tip_grupa' => $this->rndType(),
                'broj_prijavljenih' => 0
            ]);
        }
    }

    public function rndType()
    {
        $rand = rand(1, 7);

        switch ($rand) {
            case 1:
                return 'ITEH_GRUPA';
                break;
            case 2:
                return 'KOSARKA_GRUPA';
                break;
            case 3:
                return 'FUDBAL_GRUPA';
                break;
            case 4:
                return 'GAMING_GRUPA';
                break;
            case 5:
                return 'MATEMATIKA_GRUPA';
                break;
            case 6:
                return 'PRIREDBA_GRUPA';
                break;
            case 7:
                return 'POZORISTE_GRUPA';
                break;
        }
    }
}
