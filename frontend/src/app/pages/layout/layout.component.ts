import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export class LayoutComponent {
  botonActivo: string = ''; // por defecto
  isActive = false;
  nav2_isActiv = false
  selectedLink: string = ''; // Variable para guardar el enlace seleccionado
  userName: string = '';
  menuOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {

    this.userName = localStorage.getItem('userName') || 'Usuario';
    this.botonActivo = localStorage.getItem('modulActiv') ?? '';
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }

  // Función para seleccionar un enlace
  selectLink(link: string) {
    this.selectedLink = link; // Cambiar el enlace seleccionado
  }

  setActivo(nombre: string) {
    this.botonActivo = nombre;
    localStorage.setItem("modulActiv", nombre)
    // Puedes también ejecutar otras acciones aquí
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
