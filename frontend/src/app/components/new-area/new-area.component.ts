// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-new-area',
//   standalone: true,
//   imports: [],
//   templateUrl: './new-area.component.html',
//   styleUrl: './new-area.component.css'
// })
// export class NewAreaComponent {

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
  selector: 'app-new-area',
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
  templateUrl: './new-area.component.html',
  styleUrls: ['./new-area.component.css']
})
export class NewAreaComponent {
  selectedJefe: string = '';

  jefes: Option[] = [
    { value: 'juan-perez', viewValue: 'Juan Pérez' },
    { value: 'maria-lopez', viewValue: 'María López' },
    { value: 'carlos-ramos', viewValue: 'Carlos Ramos' }
  ];

  readonly dialogRef = inject(MatDialogRef<NewAreaComponent>);
  readonly Crear = model(this);

  NoClick(): void {
    this.dialogRef.close();
  }
}
