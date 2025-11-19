// import { Component, inject } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
//   private router = inject(Router);
//   showPassword = false;

//   togglePasswordVisibility(): void {
//     this.showPassword = !this.showPassword;
//   }

//   iniciarSesion() {
//     this.router.navigate(['layout'])
//   }
//     irAForgotPassword() {
//     this.router.navigate(['forgot-password']); // ✅ navega al componente de recuperar contraseña
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showPassword = false;
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  iniciarSesion() {
    if (!this.username.trim() || !this.password.trim()) {
      alert('Debe ingresar usuario y contraseña.');
      return;
    }

    // Guarda el usuario para mostrarlo en el layout
    localStorage.setItem('userName', this.username);

    // Redireccionar al layout
    this.router.navigate(['/layout']);
  }

  irAForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
  
}
