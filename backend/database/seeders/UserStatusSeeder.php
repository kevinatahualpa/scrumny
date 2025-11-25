<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserStatusSeeder extends Seeder
{
    public function run(): void
    {
        // Insertamos los IDs exactos para que coincidan con el Enum
        DB::table('user_statuses')->insertOrIgnore([
            ['id' => 1, 'name' => 'Active', 'description' => 'Habilitado'],
            ['id' => 2, 'name' => 'Inactive', 'description' => 'Deshabilitado'],
            ['id' => 3, 'name' => 'Banned', 'description' => 'Bloqueado'],
        ]);
    }
}