import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NewUserComponent } from '../../components/new-user/new-user.component';
import { EditUserComponent } from '../../components/edit-user/edit-user.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  usuarios = [
    { id: '001', nombre: 'Kevin Anthony', apellido: 'Motuhaipo Palomino', dni: '78100711', correo: 'example9', sexo: 'Masculino', telefono: '981923123', rol: 'Super Admin' },
    { id: '002', nombre: 'Ricardo', apellido: 'Cuzcano Hernandez', dni: '78100721', correo: 'example9', sexo: 'Masculino', telefono: '981923123', rol: 'Jefe de Area' },
    { id: '003', nombre: 'Mitel', apellido: 'Rubles Shantal', dni: '78100731', correo: 'example9', sexo: 'Femenino', telefono: '981924313', rol: 'Participante' }
  ];

  readonly dialog = inject(MatDialog);

  openDlgNewUser() {
    const dialogRef = this.dialog.open(NewUserComponent, {
      width: '500px',       // Ancho fijo
      height: 'auto',       // Ajusta la altura automáticamente
      maxWidth: '90vw',     // Evita que se pase del 90% del ancho de la pantalla
      data: {},
    });
  }

  openDlgEditUser(user: any): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '500px',       // Ancho fijo
      height: 'auto',       // Ajusta la altura automáticamente
      maxWidth: '90vw',     // Evita que se pase del 90% del ancho de la pantalla
      data: {
        nombre: user.nombre,
        apellido: user.apellido,
        dni: user.dni,
        sexo: user.sexo,
        telefono: user.telefono,
        direccion: '',
        area: '',
        rol: user.rol
      },
    });
  }
}
