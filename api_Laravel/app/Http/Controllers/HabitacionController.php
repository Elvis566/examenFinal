<?php

namespace App\Http\Controllers;

use App\Models\Habitacion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class HabitacionController extends Controller
{
    public function createHabitaciones(Request  $request) {

        $validate= Validator::make($request->all(),
              [
                'numeroHabitacion'=>'required',
                'numeroAsientos'=>'required',
                'pelicula'=>'required',
                'cine_id'=>'required'
              ]);
              if ($validate->fails()){
                return response()->json([
                'status'=>false,
                'message'=>'Existen campos vacios',
                'errors'=>$validate->errors()
                ],401);
              }
             
                $registro = Habitacion::create([
                    'numeroHabitacion'=>$request->numeroHabitacion,
                    'numeroAsientos'=>$request->numeroAsientos,
                    'pelicula'=>$request->pelicula,
                    'cine_id'=>$request->cine_id
        
                ]);
             
              return response()->json([
                'message'=>'Habitacion creado correctamente',
                'data'=>$registro
              ],201);
            
            
        }

        public function cargarHabitaciones(){
            $habitaciones = DB::table('habitacions')
                ->join('cines', 'cine_id', '=',  'cines.id')
                // ->where('cines.id', '=', $id)
                ->select('habitacions.*','cines.*')
                ->get();
            return response()->json(['datos'=> $habitaciones]);
        }

        public function reservarAsientos(Request  $request){
            $validate= Validator::make($request->all(),
            [
              'numeroAsientos'=>'required'
            ]);
            if ($validate->fails()){
              return response()->json([
              'status'=>false,
              'message'=>'Existen campos vacios',
              'errors'=>$validate->errors()
              ],401);
            }
            $dato = Habitacion::find($request->id);
            if($request->numeroAsientos > $dato->numeroAsientos){
                return response()->json([
                    'status'=>false,
                    'message'=>'No se puede reservar mas asientos de los disponibles'
                    ],401);
            }else{
                $dato->numeroAsientos =  $dato->numeroAsientos - $request->numeroAsientos;
                $dato->save();
            }
            return response()->json([
                'message'=>'Reserva creada correctamente',
                'data'=>$dato
              ],201);
        }
}
