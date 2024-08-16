<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Habitacion extends Model
{
    use HasFactory;
    protected $table ='habitacions';
    public $timestamps=false;
    protected $fillable = [
        'numeroHabitacion',
        'numeroAsientos',
        'pelicula',
        'cine_id'
    ];
}
