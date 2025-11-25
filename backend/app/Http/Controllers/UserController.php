<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Role; // Importamos el modelo Role
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    // 🟢 1. FUNCION PARA LISTAR (Esta es la que llena la tabla en Angular)
    public function index()
    {
        // Traemos los usuarios e incluimos la información de su rol
        // 'role' hace referencia a la función public function role() en el modelo User.php
        $users = User::with('role')->get();
        
        return response()->json($users);
    }

    // 🔵 2. FUNCION PARA CREAR (Esta es la tuya, la dejé intacta)
    public function store(Request $request)
    {
        // 1. Validar los datos que llegan de Postman/Angular
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:100',
            'last_name'  => 'required|string|max:100',
            'email'      => 'required|email|unique:users,email',
            'password'   => 'required|min:6',
            'phone'      => 'nullable|string|max:20',
            'role_selected' => 'required|integer|exists:roles,id', 
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        try {
            // 2. Crear el usuario
            $user = User::create([
                'first_name'    => $request->first_name,
                'last_name'     => $request->last_name,
                'email'         => $request->email,
                'password_hash' => Hash::make($request->password),
                'phone'         => $request->phone,
                'status_id'     => 1, // 1 = Active
                'role_id'       => $request->role_selected,
                'is_super_admin'=> ($request->role_selected == 1), 
            ]);

            return response()->json([
                'message' => 'User created successfully',
                'user' => $user
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error creating user',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}