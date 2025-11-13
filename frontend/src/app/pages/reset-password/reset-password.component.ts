

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  password: string = '';
  password_confirmation: string = '';
  token: string = '';
  showPassword = false;
  showPasswordConfirm = false; // ✅ agrega esta línea

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Obtener el token desde la URL (reset-password/:token)
    this.token = this.route.snapshot.paramMap.get('token') || '';
  }

  // ✅ mostrar/ocultar campo de "nueva contraseña"
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // ✅ mostrar/ocultar campo de "confirmar contraseña"
  togglePasswordConfirm() {
    this.showPasswordConfirm = !this.showPasswordConfirm;
  }

  // ✅ lógica del botón "Guardar Contraseña"
  cambiarPassword() {
    if (!this.password || !this.password_confirmation) {
      alert('⚠️ Debes ingresar y confirmar tu nueva contraseña.');
      return;
    }

    if (this.password !== this.password_confirmation) {
      alert('❌ Las contraseñas no coinciden.');
      return;
    }

    // 🔗 Simulación de conexión al backend
    this.http.post('http://localhost:8000/api/reset-password', {
      token: this.token,
      password: this.password,
      password_confirmation: this.password_confirmation
    }).subscribe({
      next: () => {
        alert('✅ Contraseña actualizada correctamente');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error:', error);
        alert('❌ Error al actualizar la contraseña. Intenta de nuevo.');
      }
    });
  }

    volverLogin() {
    this.router.navigate(['/']);
  }
}
