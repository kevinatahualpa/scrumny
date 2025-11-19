// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-delete-project',
//   standalone: true,
//   imports: [],
//   templateUrl: './delete-project.component.html',
//   styleUrl: './delete-project.component.css'
// })
// export class DeleteProjectComponent {

// }


import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmar() {
    this.dialogRef.close(true);   // Usuario confirmó
  }

  cancelar() {
    this.dialogRef.close(false);  // Usuario canceló
  }
}
