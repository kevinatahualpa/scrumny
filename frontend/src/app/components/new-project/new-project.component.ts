// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-new-project',
//   standalone: true,
//   imports: [],
//   templateUrl: './new-project.component.html',
//   styleUrl: './new-project.component.css'
// })
// export class NewProjectComponent {

// }


import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
  ],
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {
  selectedJefe: string = '';
  inicio: string = '';
  vencimiento: string = '';
  estado: string = '';

  jefes: Option[] = [
    { value: 'juan-perez', viewValue: 'Juan Pérez' },
    { value: 'maria-lopez', viewValue: 'María López' },
    { value: 'carlos-ramos', viewValue: 'Carlos Ramos' }
  ];

  estados: string[] = ['Activo', 'Pendiente', 'Finalizado'];

  readonly dialogRef = inject(MatDialogRef<NewProjectComponent>);
  readonly Crear = model(this);

  NoClick(): void {
    this.dialogRef.close();
  }
}
