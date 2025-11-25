<?php

namespace App\Models;

// 1. IMPORTANTE: Importar Sanctum
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    // 2. IMPORTANTE: Agregar HasApiTokens aquí
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'users';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password_hash', // Tu columna personalizada
        'phone',
        'avatar_url',
        'is_super_admin',
        'status_id',
        'role_id',
    ];

    protected $hidden = [
        'password_hash',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_super_admin' => 'boolean',
    ];

    // Le decimos a Laravel que la contraseña está en 'password_hash'
    public function getAuthPasswordName()
    {
        return 'password_hash';
    }

    // 👇 ESTA ES LA PARTE CLAVE 👇
    public function role()
    {
        // Laravel buscará la clase Role en el mismo namespace (App\Models)
        return $this->belongsTo(Role::class, 'role_id');
    }
}