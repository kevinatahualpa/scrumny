import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  
  private router = inject(Router);
  private authService = inject(AuthService);

  // --- VARIABLES DE TU DISEÑO ACTUAL ---
  botonActivo: string = ''; 
  isActive = false;
  nav2_isActiv = false;
  selectedLink: string = ''; 
  menuOpen: boolean = false;

  userName: string = 'Usuario'; 

  // 🟢 1. NUEVA VARIABLE DE SEGURIDAD
  isAdmin: boolean = false;

  ngOnInit() {
    this.botonActivo = localStorage.getItem('modulActiv') ?? '';
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario() {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const user = JSON.parse(userString);
        
        // Asignar nombre
        this.userName = user.first_name || user.name || 'Usuario';

        // 🟢 2. VERIFICAR SI ES SUPER ADMIN
        // Si role_id es 1 o is_super_admin es 1 (o true), entonces ES admin.
        if (user.role_id === 1 || user.is_super_admin === 1 || user.is_super_admin === true) {
          this.isAdmin = true;
        } else {
          this.isAdmin = false;
        }

      } catch (e) {
        console.error('Error leyendo usuario:', e);
      }
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    this.authService.logout();
  }

  selectLink(link: string) {
    this.selectedLink = link;
  }

  setActivo(nombre: string) {
    this.botonActivo = nombre;
    localStorage.setItem("modulActiv", nombre);
  }

  expandir() {
    this.isActive = !this.isActive;
    this.nav2_isActiv = !this.nav2_isActiv;
  }

  regresar() {
    this.isActive = !this.isActive;
    this.nav2_isActiv = !this.nav2_isActiv;
  }
}