import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule],
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'] // Asegúrate de copiar el CSS de tu compañero aquí
})
export class NewUserComponent {
  
  private userService = inject(UserService);
  readonly dialogRef = inject(MatDialogRef<NewUserComponent>);

  // Objeto de datos
  userData = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    role_selected: 4 // Por defecto 'Team Member'
  };

  // Lista de roles
  roles = [
    { value: 1, viewValue: 'Super Admin' },
    { value: 2, viewValue: 'Area Manager' },
    { value: 3, viewValue: 'Project Manager' },
    { value: 4, viewValue: 'Team Member' },
    { value: 5, viewValue: 'QA Engineer' }
  ];

  saveUser(): void {
    if(!this.userData.email || !this.userData.password) return;

    this.userService.createUser(this.userData).subscribe({
      next: (res) => {
        alert('Usuario creado exitosamente!');
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error(err);
        alert('Error: ' + (err.error.message || 'Verifica los datos'));
      }
    });
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}