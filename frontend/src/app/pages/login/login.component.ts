import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para [(ngModel)]
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // 1. Importamos tu servicio

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Inyecciones de dependencias
  private router = inject(Router);
  private authService = inject(AuthService); // 2. Inyectamos el servicio

  // Variables que enlazan con el HTML de tus compañeros
  showPassword = false;
  username: string = ''; // El HTML usa esto
  password: string = ''; // El HTML usa esto

  // Función para mostrar/ocultar contraseña (la del ojito)
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // --- LOGICA PRINCIPAL ---
  iniciarSesion() {
    // 1. Validamos que no estén vacíos
    if (!this.username.trim() || !this.password.trim()) {
      alert('Por favor, ingresa tu correo y contraseña.');
      return;
    }

    // 2. TRUCO: Mapeamos los datos
    // El HTML guarda en 'username', pero Laravel quiere 'email'.
    // Aquí hacemos el cambio antes de enviar.
    const credenciales = {
      email: this.username, 
      password: this.password
    };

    // 3. Llamamos al Backend
    this.authService.login(credenciales).subscribe({
      next: (respuesta) => {
        console.log('Login exitoso:', respuesta);
        
        // Guardar nombre usuario (Opcional, por si lo usas en el layout)
        // Nota: El authService ya guardó el token y el usuario completo en localStorage
        if(respuesta.user && respuesta.user.name) {
             localStorage.setItem('userName', respuesta.user.name);
        }

        // 4. Redirigir al Dashboard
        this.router.navigate(['/layout']);
      },
      error: (error) => {
        console.error('Error al entrar:', error);
        // Mostrar mensaje de error amigable
        alert('Error: ' + (error.error.message || 'Credenciales incorrectas'));
      }
    });
  }

  irAForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}