// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-forgot-password',
//   standalone: true,
//   imports: [],
//   templateUrl: './forgot-password.component.html',
//   styleUrl: './forgot-password.component.css'
// })
// export class ForgotPasswordComponent {

// }


// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-forgot-password',
//   templateUrl: './forgot-password.component.html',
//   styleUrls: ['./forgot-password.component.css']
// })
// export class ForgotPasswordComponent {
//   email: string = '';

//   constructor(private http: HttpClient) {}

//   enviarCorreo() {
//     if (!this.email) return;

//     this.http.post('http://localhost:8000/api/forgot-password', { email: this.email })
//       .subscribe({
//         next: (res) => alert('Correo de recuperación enviado'),
//         error: (err) => alert('Error al enviar el correo')
//       });
//   }
// }



// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-forgot-password',
//   standalone: true,
//   imports: [],
//   templateUrl: './forgot-password.component.html',
//   styleUrl: './forgot-password.component.css'
// })

// @Component({
//   selector: 'app-forgot-password',
//   standalone: true,
//   imports: [FormsModule], // ✅ Agrega esto
//   templateUrl: './forgot-password.component.html',
//   styleUrl: './forgot-password.component.css'
// })

// export class ForgotPasswordComponent {
//   email: string = '';

//   constructor(private http: HttpClient) {}

//   enviarCorreo() {
//     if (!this.email) {
//       alert('Por favor ingresa tu correo electrónico.');
//       return;
//     }

//     this.http.post('http://localhost:8000/api/forgot-password', { email: this.email })
//       .subscribe({
//         next: () => alert('📨 Se envió un enlace de recuperación a tu correo.'),
//         error: () => alert('❌ No se pudo enviar el correo, verifica el email.')
//       });
//   }
// }


// import { Component, inject } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-forgot-password',
//   standalone: true,
//   imports: [FormsModule],
//   templateUrl: './forgot-password.component.html',
//   styleUrl: './forgot-password.component.css'
// })
// export class ForgotPasswordComponent {
//   private router = inject(Router);
//   email = '';

//   enviarCorreo() {
//     if (!this.email) {
//       alert('Por favor, ingresa tu correo electrónico.');
//       return;
//     }

//     alert(`Se ha enviado un enlace de recuperación a: ${this.email}`);
//     this.router.navigate(['/reset-password', 'token_ejemplo']);
//   }

//   volverLogin() {
//     this.router.navigate(['/']);
//   }
// }


import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  private router = inject(Router);
  email = '';

  enviarCorreo() {
    if (!this.email) {
      alert('⚠️ Por favor, ingresa tu correo electrónico.');
      return;
    }

    // Simulación de envío de correo
    alert(`📩 Enlace de recuperación enviado a: ${this.email}`);

    // Navegar al formulario de restablecimiento simulando un token de ejemplo
    this.router.navigate(['/reset-password', 'token123']);
  }

  volverLogin() {
    this.router.navigate(['/']);
  }
}
