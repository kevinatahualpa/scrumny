import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-participant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-participant.component.html',
  styleUrls: ['./view-participant.component.css']
})
export class ViewParticipantComponent {

  proyectos = ['Sistema de Ventas', 'Gestión Académica', 'Inventario TI'];
  proyectoSeleccionado: string = '';

  constructor(
    public dialogRef: MatDialogRef<ViewParticipantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Proyecto inicial asignado
    this.proyectoSeleccionado = data.proyecto;
  }

  retirarProyecto() {
    if (confirm(`¿Desea retirar a ${this.data.nombres} del proyecto "${this.proyectoSeleccionado}"?`)) {
      this.data.proyecto = '';
      alert('Participante retirado del proyecto.');
    }
  }

  cerrar() {
    this.dialogRef.close();
  }
}
