import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = `${AppSettings.apiUrl}/users`; 

  // Helper para obtener el token
  private getHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
  }

  // 1. Obtener lista de usuarios
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl, this.getHeaders());
  }

  // 2. Crear nuevo usuario
  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData, this.getHeaders());
  }
}