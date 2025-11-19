// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-delete-participant',
//   standalone: true,
//   imports: [],
//   templateUrl: './delete-participant.component.html',
//   styleUrl: './delete-participant.component.css'
// })
// export class DeleteParticipantComponent {

// }


// import { Component, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-delete-participant',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './delete-participant.component.html',
//   styleUrls: ['./delete-participant.component.css']
// })
// export class DeleteParticipantComponent {

//   constructor(
//     public dialogRef: MatDialogRef<DeleteParticipantComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {}

//   confirmar() {
//     this.dialogRef.close(true);
//   }

//   cancelar() {
//     this.dialogRef.close(false);
//   }
// }



import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-participant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-participant.component.html',
  styleUrl: './delete-participant.component.css'
})
export class DeleteParticipantComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteParticipantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmar() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(false);
  }
}
