<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Creamos al SUPER ADMIN de forma segura
        // firstOrCreate evita que se duplique si corres el comando 2 veces
        $admin = User::firstOrCreate(
            ['email' => 'admin@kortex.com'], // Buscamos por este email
            [
                'first_name'     => 'Super',
                'last_name'      => 'Admin',
                'password_hash'  => Hash::make('Admin123!'), // <--- Contraseña segura
                'phone'          => '999999999',
                'status_id'      => 1, // Active
                'role_id'        => 1, // <--- ROL 1: Super Admin
                'is_super_admin' => true, // Flag de seguridad
            ]
        );

        $this->command->info('--- SEGURIDAD ---');
        $this->command->info("Super Admin creado: {$admin->email}");
        $this->command->info("Contraseña: Admin123!");
    }
}