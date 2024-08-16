<?php

namespace App\Http\Controllers;

use App\Models\Cine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CineController extends Controller
{
    public function createCines(Request  $request) {

        $validate= Validator::make($request->all(),
              [
                'nombre'=>'required',
                'lugar'=>'required'
              ]);
              if ($validate->fails()){
                return response()->json([
                'status'=>false,
                'message'=>'Existen campos vacios',
                'errors'=>$validate->errors()
                ],401);
              }
             
                $registro = Cine::create([
                    'nombre'=>$request->nombre,
                    'lugar'=>$request->lugar
        
                ]);
             
              return response()->json([
                'message'=>'Cine creado correctamente',
                'data'=>$registro
              ],201);
            
            
        }

        public function cargarCines(){
            $registro = Cine::all();
            return response()->json(['registro'=>$registro], 200);
        }
}
