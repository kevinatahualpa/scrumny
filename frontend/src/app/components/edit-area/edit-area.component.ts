// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-area',
//   standalone: true,
//   imports: [],
//   templateUrl: './edit-area.component.html',
//   styleUrl: './edit-area.component.css'
// })
// export class EditAreaComponent {

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
  miembros: string;
}

@Component({
  selector: 'app-edit-area',
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
  templateUrl: './edit-area.component.html',
  styleUrl: './edit-area.component.css'
})
export class EditAreaComponent {
  readonly dialogRef = inject(MatDialogRef<EditAreaComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly Guardar = model(this.data);

  jefes: Option[] = [
    { value: 'Juan Pérez', viewValue: 'Juan Pérez' },
    { value: 'María López', viewValue: 'María López' },
    { value: 'Carlos Ramos', viewValue: 'Carlos Ramos' },
    { value: 'Ana Torres', viewValue: 'Ana Torres' }
  ];

  NoClick(): void {
    this.dialogRef.close();
  }
}

