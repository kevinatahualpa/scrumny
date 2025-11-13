import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle, } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface option { value: number; viewValue: string; }

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [MatSelectModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})

export class NewUserComponent {
  selected: number = 0;
  roles: option[] = [{ value: 1, viewValue: 'Super Admin' }, { value: 2, viewValue: 'Jefe de Area' }, { value: 3, viewValue: 'Jefe de Proyecto' }, { value: 4, viewValue: 'Participante' }];
  areas: option[] = [{ value: 1, viewValue: 'Area 1' }, { value: 2, viewValue: 'Area 2' }, { value: 3, viewValue: 'Area 3' }, { value: 4, viewValue: 'Area 4' }];
  sexos: option[] = [{ value: 1, viewValue: 'Masculino' }, { value: 2, viewValue: 'Femenino' }];

  readonly dialogRef = inject(MatDialogRef<NewUserComponent>);
  // readonly ok = model(this.data.animal);
  readonly Crear = model(this);

  NoClick(): void {
    this.dialogRef.close();
  }
}
