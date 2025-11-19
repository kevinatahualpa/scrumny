import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invite-participant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invite-participant.component.html',
  styleUrl: './invite-participant.component.css'
})
export class InviteParticipantComponent {

  proyecto = '';
  correo = '';
  descripcion = '';

  constructor(
    private dialogRef: MatDialogRef<InviteParticipantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  enviarInvitacion() {
    if (!this.proyecto || !this.correo) return;

    this.dialogRef.close({
      proyecto: this.proyecto,
      correo: this.correo,
      descripcion: this.descripcion
    });
  }

  cancelar() {
    this.dialogRef.close(null);
  }
}
