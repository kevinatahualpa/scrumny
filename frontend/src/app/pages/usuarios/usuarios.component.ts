import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    { id: '002', nombre: 'Ricardo', apellido: 'Cuzcano Hernandez', dni: '78100721', correo: 'example9', sexo: 'Masculino', telefono: '981923123', rol: 'Admin' },
    { id: '003', nombre: 'Mitel', apellido: 'Rubles Shantal', dni: '78100731', correo: 'example9', sexo: 'Femenino', telefono: '981924313', rol: 'Usuario' }
  ];
}
