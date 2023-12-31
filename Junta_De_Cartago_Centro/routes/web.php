<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoutingController;


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

Route::get('/home', function () {
    return view('index');
})->middleware('auth')->name('home');

Route::get('/test', function () {
    return view('test');
});


require __DIR__ . '/auth.php';

Route::group(['prefix' => '/'], function () {
    Route::get('', [RoutingController::class, 'index'])->name('root');
    Route::get('{first}/{second}/{third}', [RoutingController::class, 'thirdLevel'])->name('third');
    Route::get('{first}/{second}', [RoutingController::class, 'secondLevel'])->name('second');
    Route::get('{any}', [RoutingController::class, 'root'])->name('any');
});

Route::get('/forms/form', 'FormsController@miMetodo')->name('forms');
Route::get('/documentos/busqueda-documentos', 'FormsController@miMetodo2')->name('busqueda');
Route::get('/apps/file-manager', 'FormsController@miMetodo3')->name('file-manager');
Route::get('/auth/login', 'FormsController@miMetodo4')->name('inicioSesion');
