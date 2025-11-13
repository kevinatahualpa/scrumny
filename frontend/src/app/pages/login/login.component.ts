import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = inject(Router);
  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  iniciarSesion() {
    this.router.navigate(['layout'])
  }
    irAForgotPassword() {
    this.router.navigate(['forgot-password']); // ✅ navega al componente de recuperar contraseña
  }
}
