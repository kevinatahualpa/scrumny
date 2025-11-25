<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AuthController;

// --- RUTA PÚBLICA (Cualquiera puede intentar entrar) ---
Route::post('/login', [AuthController::class, 'login']);

// --- RUTAS PROTEGIDAS (Solo con Token válido) ---
Route::middleware('auth:sanctum')->group(function () {
    
    // Cerrar sesión
    Route::post('/logout', [AuthController::class, 'logout']);

    // Crear usuarios (Solo permitiremos esto si estás logueado en el futuro)
    Route::post('/users', [UserController::class, 'store']);
    
    // Ver mis datos
    Route::get('/me', function (\Illuminate\Http\Request $request) {
        return $request->user();
    });

});