// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-proyectos',
//   standalone: true,
//   imports: [],
//   templateUrl: './proyectos.component.html',
//   styleUrl: './proyectos.component.css'
// })
// export class ProyectosComponent {

// }


import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectComponent } from '../../components/edit-project/edit-project.component';
import { NewProjectComponent } from '../../components/new-project/new-project.component';
import { DeleteProjectComponent } from '../../components/delete-project/delete-project.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  proyectos = [
    { id: 'P001', proyecto: 'Sistema de Ventas', jefeProyecto: 'Juan Pérez', inicio: '2025-01-01', vencimiento: '2025-06-01', estado: 'En progreso' },
    { id: 'P002', proyecto: 'Gestión Académica', jefeProyecto: 'María López', inicio: '2025-02-15', vencimiento: '2025-07-15', estado: 'Pendiente' },
    { id: 'P003', proyecto: 'Inventario TI', jefeProyecto: 'Carlos Ramos', inicio: '2025-03-01', vencimiento: '2025-08-01', estado: 'Completado' }
  ];

  estados = ['Pendiente', 'En progreso', 'Completado'];

  filtroProyecto: string = '';
  filtroEstado: string = '';
  filtroFecha: string = '';
  buscarTexto: string = '';

  readonly dialog = inject(MatDialog);

  openDlgNewProject() {
    this.dialog.open(NewProjectComponent, {
      width: '500px',
      height: 'auto',
      maxWidth: '90vw',
      data: {}
    });
  }

  openDlgEditProject(proyecto: any) {
    this.dialog.open(EditProjectComponent, {
      width: '500px',
      height: 'auto',
      maxWidth: '90vw',
      data: proyecto
    });
  }

//   confirmarEliminacion(p: any) {
//   const confirmar = window.confirm(
//     `¿Desea retirar el proyecto "${p.proyecto}" del área?`
//   );

//   if (confirmar) {
//     this.proyectos = this.proyectos.filter(proy => proy.id !== p.id);
//   }
// }
openDlgDeleteProject(proyecto: any) {
  const dialogRef = this.dialog.open(DeleteProjectComponent, {
    width: '500px',
    data: proyecto
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
      this.proyectos = this.proyectos.filter(p => p.id !== proyecto.id);
    }
  });
}


  proyectosFiltrados() {
    return this.proyectos.filter(p => {
      const matchProyecto = this.filtroProyecto ? p.proyecto === this.filtroProyecto : true;
      const matchEstado = this.filtroEstado ? p.estado === this.filtroEstado : true;
      const matchFecha = this.filtroFecha ? p.inicio <= this.filtroFecha && p.vencimiento >= this.filtroFecha : true;
      const matchBuscar = this.buscarTexto
        ? p.proyecto.toLowerCase().includes(this.buscarTexto.toLowerCase()) ||
          p.jefeProyecto.toLowerCase().includes(this.buscarTexto.toLowerCase())
        : true;

      return matchProyecto && matchEstado && matchFecha && matchBuscar;
    });
  }

    // ✅ MÉTODO DEBE ESTAR DENTRO DE LA CLASE
//   toggleEstado(p: any) {
//     if (p.estado === 'Suspendido') {
//       p.estado = 'Activo';
//     } else {
//       p.estado = 'Suspendido';
//     }
//   }
// }

toggleEstado(p: any) {
  if (p.estado !== 'Suspendido') {
    p.estado = 'Suspendido';
  } else {
    p.estado = 'En progreso'; // O "Activo", lo que uses
  }
}
}