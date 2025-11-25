import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AppSettings } from '../settings/appsettings';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  
  private apiUrl = `${AppSettings.apiUrl}/login`; // http://127.0.0.1:8000/api/login

  login(credentials: any): Observable<any> {
    return this.http.post(this.apiUrl, credentials).pipe(
      tap((response: any) => {
        // AQUÍ OCURRE LA MAGIA: Guardamos el token
        if (response.access_token) {
          localStorage.setItem('token', response.access_token);
          localStorage.setItem('user', JSON.stringify(response.user));
        }
      })
    );
  }

  // Método para cerrar sesión (borra el token)
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  // Método para saber si está logueado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Devuelve true si existe token
  }
}