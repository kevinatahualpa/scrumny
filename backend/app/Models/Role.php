<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    // 1. Indicamos que la tabla se llama 'roles'
    protected $table = 'roles';

    // 2. Desactivamos timestamps si tu tabla no tiene 'created_at' y 'updated_at'
    // (En tu script SQL original no los vi, así que mejor poner esto en false)
    public $timestamps = false; 

    // 3. Permitimos asignación masiva (por seguridad)
    protected $fillable = ['name', 'description'];
}