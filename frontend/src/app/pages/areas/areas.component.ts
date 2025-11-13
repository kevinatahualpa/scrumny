// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-areas',
//   standalone: true,
//   imports: [],
//   templateUrl: './areas.component.html',
//   styleUrl: './areas.component.css'
// })
// export class AreasComponent {

// }


// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-areas',
//   standalone: true,
//   templateUrl: './areas.component.html',
//   styleUrls: ['./areas.component.css']
// })
// export class AreasComponent {
//   constructor(private router: Router) {}

//   volverLayout() {
//     this.router.navigate(['/layout']); // 🔙 Vuelve al panel principal
//   }

//   nuevaArea() {
//     this.router.navigate(['/new-area']); // 🔜 Navega al formulario para crear área
//   }

//   editarArea() {
//     this.router.navigate(['/edit-area']); // 🔧 Navega al formulario de edición
//   }
// }


import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NewAreaComponent } from '../../components/new-area/new-area.component';
import { EditAreaComponent } from '../../components/edit-area/edit-area.component';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent {

  // Datos de ejemplo (puedes reemplazarlos por tu API)
  areas = [
    { id: 'A001', proyecto: 'Sistema de Ventas', jefeProyecto: 'Juan Pérez', miembros: 'Ana, Luis, Carla' },
    { id: 'A002', proyecto: 'Gestión Académica', jefeProyecto: 'María López', miembros: 'José, Diana, Pedro' },
    { id: 'A003', proyecto: 'Inventario TI', jefeProyecto: 'Carlos Ramos', miembros: 'Erika, Mateo' }
  ];

  readonly dialog = inject(MatDialog);

  openDlgNewArea() {
    const dialogRef = this.dialog.open(NewAreaComponent, {
      width: '500px',
      height: 'auto',
      maxWidth: '90vw',
      data: {}
    });
  }

  openDlgEditArea(area: any): void {
    const dialogRef = this.dialog.open(EditAreaComponent, {
      width: '500px',
      height: 'auto',
      maxWidth: '90vw',
      data: {
        id: area.id,
        proyecto: area.proyecto,
        jefeProyecto: area.jefeProyecto,
        miembros: area.miembros
      }
    });
  }
}
