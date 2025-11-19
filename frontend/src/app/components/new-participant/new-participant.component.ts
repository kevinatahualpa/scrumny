import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-participant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-participant.component.html',
  styleUrl: './new-participant.component.css'
})
export class NewParticipantComponent {

  proyectos = ['Sistema de Ventas', 'Gestión Académica', 'Inventario TI'];

  participante = {
    nombres: '',
    apellidos: '',
    telefono: '',
    correo: '',
    proyecto: ''
  };

  constructor(
    public dialogRef: MatDialogRef<NewParticipantComponent>
  ) {}

  crear() {
    this.dialogRef.close(this.participante);
  }

  cancelar() {
    this.dialogRef.close(null);
  }

  formValido() {
    return (
      this.participante.nombres.trim() !== '' &&
      this.participante.apellidos.trim() !== '' &&
      this.participante.correo.trim() !== '' &&
      this.participante.proyecto.trim() !== ''
    );
  }
}
