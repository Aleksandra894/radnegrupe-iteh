<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PageController@index');

Route::get('/grupe/get', 'GrupaController@get_grupe');

Route::get('/korisnik/get', 'KorisnikController@get_korisnici');
Route::put('/korisnik/izmeni', 'KorisnikController@izmeni_email');
Route::post('/korisnik/dodaj', 'KorisnikController@dodaj_korisnika');
Route::delete('/korisnik/izbrisi', 'KorisnikController@delete_korisnik');
