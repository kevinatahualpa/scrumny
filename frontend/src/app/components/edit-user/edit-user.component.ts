import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle, } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface option { value: string; viewValue: string; }
export interface DialogData {
  nombre: string;
  apellido: string;
  dni: string;
  sexo: string;
  telefono: string;
  direccion: string;
  area: string;
  rol: string;
}


@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  selected: number = 0;
  roles: option[] = [{ value: 'Super Admin', viewValue: 'Super Admin' }, { value: 'Jefe de Area', viewValue: 'Jefe de Area' }, { value: 'Jefe de Proyecto', viewValue: 'Jefe de Proyecto' }, { value: 'Participante', viewValue: 'Participante' }];
  areas: option[] = [{ value: 'Area 1', viewValue: 'Area 1' }, { value: 'Area 2', viewValue: 'Area 2' }];
  sexos: option[] = [{ value: 'Masculino', viewValue: 'Masculino' }, { value: 'Femenino', viewValue: 'Femenino' }];

  readonly dialogRef = inject(MatDialogRef<EditUserComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  // readonly ok = model(this.data.animal);
  readonly Guardar = model(this.data);

  NoClick(): void {
    this.dialogRef.close();
  }
}
