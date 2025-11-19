// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-participant',
//   standalone: true,
//   imports: [],
//   templateUrl: './edit-participant.component.html',
//   styleUrl: './edit-participant.component.css'
// })
// export class EditParticipantComponent {

// }


// import { Component, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-edit-participant',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './edit-participant.component.html',
//   styleUrls: ['./edit-participant.component.css']
// })
// export class EditParticipantComponent {

//   proyectos = ['Sistema de Ventas', 'Gestión Académica', 'Inventario TI'];

//   constructor(
//     public dialogRef: MatDialogRef<EditParticipantComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {}

//   guardar() {
//     this.dialogRef.close(this.data);
//   }

//   cancelar() {
//     this.dialogRef.close(null);
//   }
// }


import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-participant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-participant.component.html',
  styleUrl: './edit-participant.component.css'
})
export class EditParticipantComponent {

  proyectos = ['Sistema de Ventas', 'Gestión Académica', 'Inventario TI'];

  constructor(
    public dialogRef: MatDialogRef<EditParticipantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  guardar() {
    this.dialogRef.close(this.data);
  }

  cancelar() {
    this.dialogRef.close(null);
  }
}
