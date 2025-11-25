<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // LOGIN
    public function login(Request $request)
    {
        // 1. Validar que envíen datos
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // 2. Buscar usuario por Email
        $user = User::where('email', $request->email)->first();

        // 3. Verificar contraseña (Manual porque tu columna es personalizada)
        if (! $user || ! Hash::check($request->password, $user->password_hash)) {
            return response()->json([
                'message' => 'Credenciales inválidas (Email o contraseña incorrectos)'
            ], 401);
        }

        // 4. Verificar si está activo (status_id = 1 es Activo)
        if ($user->status_id !== 1) {
            return response()->json([
                'message' => 'Usuario inactivo o bloqueado'
            ], 403);
        }

        // 5. Crear Token (La llave digital)
        // Borramos tokens viejos para limpiar sesiones anteriores
        $user->tokens()->delete();
        $token = $user->createToken('auth_token')->plainTextToken;

        // 6. Responder con el Token y datos del usuario
        return response()->json([
            'message' => 'Login exitoso',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => [
                'id' => $user->id,
                'name' => $user->first_name . ' ' . $user->last_name,
                'email' => $user->email,
                'role_id' => $user->role_id,
                'is_super_admin' => $user->is_super_admin
            ]
        ], 200);
    }

    // LOGOUT
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Sesión cerrada correctamente']);
    }
}