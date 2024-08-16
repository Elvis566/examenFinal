<?php

use App\Http\Controllers\CineController;
use App\Http\Controllers\HabitacionController;
use App\Models\Cine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/createCine', [CineController::class, 'createCines']);
Route::get('/traerCines', [CineController::class, 'cargarCines']);
Route::post('/createHabitaciones', [HabitacionController::class, 'createHabitaciones']);
Route::get('/traerHabitaciones', [HabitacionController::class, 'cargarHabitaciones']);
Route::put('/reservar', [HabitacionController::class, 'reservarAsientos']);