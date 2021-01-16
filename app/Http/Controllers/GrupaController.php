<?php

namespace App\Http\Controllers;

use App\Grupa;
use Illuminate\Http\Request;

class GrupaController extends Controller
{
    public function get_grupe()
    {
        $grupe = Grupa::all();

        return response()->json([
            'grupe' => $grupe
        ]);
    }
}
