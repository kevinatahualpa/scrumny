<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserStatus extends Model
{
    protected $table = 'user_statuses'; // Nombre exacto en tu SQL
    public $timestamps = false; // Tu tabla no tiene created_at/updated_at
    
    protected $fillable = ['id', 'name', 'description'];
}