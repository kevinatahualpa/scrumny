// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-project',
//   standalone: true,
//   imports: [],
//   templateUrl: './edit-project.component.html',
//   styleUrl: './edit-project.component.css'
// })
// export class EditProjectComponent {

// }


import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

interface Option {
  value: string;
  viewValue: string;
}

export interface DialogData {
  id: string;
  proyecto: string;
  jefeProyecto: string;
  inicio: string;
  vencimiento: string;
  estado: string;
}

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {
  readonly dialogRef = inject(MatDialogRef<EditProjectComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly Guardar = model(this.data);

  jefes: Option[] = [
    { value: 'Juan Pérez', viewValue: 'Juan Pérez' },
    { value: 'María López', viewValue: 'María López' },
    { value: 'Carlos Ramos', viewValue: 'Carlos Ramos' },
    { value: 'Ana Torres', viewValue: 'Ana Torres' }
  ];

  estados: string[] = ['Activo', 'Pendiente', 'Finalizado'];

  NoClick(): void {
    this.dialogRef.close();
  }
}
