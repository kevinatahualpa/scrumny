// import { Component } from '@angular/core';
// import { Router, RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-layout',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './layout.component.html',
//   styleUrl: './layout.component.css'
// })
// export class LayoutComponent {
  
// usuario: string = '';

//   constructor() {}

// userName: string = '';

// ngOnInit() {
//   this.userName = localStorage.getItem('userName') || 'Usuario';
// }

// }

// import { Component, OnInit } from '@angular/core';
// import { Router, RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-layout',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './layout.component.html',
//   styleUrls: ['./layout.component.css']
// })
// export class LayoutComponent implements OnInit {

//   userName: string = '';

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.userName = localStorage.getItem('userName') || 'Usuario';
//   }

// }


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

  ngOnInit(){


    this.botonActivo = localStorage.getItem('modulActiv') ?? '';
  }

  isActive = false;
  nav2_isActiv = false
  expandir() {
    this.isActive = !this.isActive;
    this.nav2_isActiv = !this.nav2_isActiv;
  }

  regresar() {
    this.isActive = !this.isActive;
    this.nav2_isActiv = !this.nav2_isActiv;
  }


  setActivo(nombre: string) {
    this.botonActivo = nombre;
    localStorage.setItem("modulActiv", nombre)
    // Puedes también ejecutar otras acciones aquí
  }
  
  userName: string = '';
  menuOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Usuario';
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }
  
}
  selectedLink: string = ''; // Variable para guardar el enlace seleccionado

  // Función para seleccionar un enlace
  selectLink(link: string) {
    this.selectedLink = link; // Cambiar el enlace seleccionado
  }
}
