// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-participantes',
//   standalone: true,
//   imports: [],
//   templateUrl: './participantes.component.html',
//   styleUrl: './participantes.component.css'
// })
// export class ParticipantesComponent {

// }


// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatDialog } from '@angular/material/dialog';

// @Component({
//   selector: 'app-participantes',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './participantes.component.html',
//   styleUrl: './participantes.component.css'
// })
// export class ParticipantesComponent {

//   proyectos = ['Sistema de Ventas', 'Gestión Académica', 'Inventario TI'];

//   participantes = [
//     {
//       nombres: 'Luis',
//       apellidos: 'García',
//       telefono: '987654321',
//       correo: 'luis@example.com',
//       proyecto: 'Sistema de Ventas'
//     },
//     {
//       nombres: 'Ana',
//       apellidos: 'Torres',
//       telefono: '912345678',
//       correo: 'ana@example.com',
//       proyecto: 'Gestión Académica'
//     },
//     {
//       nombres: 'Mario',
//       apellidos: 'Fernández',
//       telefono: '945123789',
//       correo: 'mario@example.com',
//       proyecto: 'Inventario TI'
//     }
//   ];

//   filtroProyecto: string = '';
//   buscarTexto: string = '';
//   readonly dialog = inject(MatDialog);

//   // Abrir diálogos (si luego quieres crear los dialogs, dímelo)
//   openDlgNewParticipante() {}
//   openDlgEditParticipante(participante: any) {}
//   openDlgDeleteParticipante(participante: any) {}

//   participantesFiltrados() {
//     return this.participantes.filter(p => {
//       const matchProyecto = this.filtroProyecto ? p.proyecto === this.filtroProyecto : true;
//       const matchBuscar = this.buscarTexto
//         ? p.nombres.toLowerCase().includes(this.buscarTexto.toLowerCase()) ||
//           p.apellidos.toLowerCase().includes(this.buscarTexto.toLowerCase()) ||
//           p.correo.toLowerCase().includes(this.buscarTexto.toLowerCase())
//         : true;

//       return matchProyecto && matchBuscar;
//     });
//   }
// }


import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { EditParticipantComponent } from '../../components/edit-participant/edit-participant.component';
import { DeleteParticipantComponent } from '../../components/delete-participant/delete-participant.component';
import { NewParticipantComponent } from '../../components/new-participant/new-participant.component';
import { InviteParticipantComponent } from '../../components/invite-participant/invite-participant.component';
import { ViewParticipantComponent } from '../../components/view-participant/view-participant.component';

@Component({
  selector: 'app-participantes',
  standalone: true,
  imports: [CommonModule, FormsModule, EditParticipantComponent, DeleteParticipantComponent],
  templateUrl: './participantes.component.html',
  styleUrl: './participantes.component.css'
})
export class ParticipantesComponent {

  proyectos = ['Sistema de Ventas', 'Gestión Académica', 'Inventario TI'];

  participantes = [
    {
      nombres: 'Luis',
      apellidos: 'García',
      telefono: '987654321',
      correo: 'luis@example.com',
      proyecto: 'Sistema de Ventas'
    },
    {
      nombres: 'Ana',
      apellidos: 'Torres',
      telefono: '912345678',
      correo: 'ana@example.com',
      proyecto: 'Gestión Académica'
    },
    {
      nombres: 'Mario',
      apellidos: 'Fernández',
      telefono: '945123789',
      correo: 'mario@example.com',
      proyecto: 'Inventario TI'
    }
  ];

  filtroProyecto: string = '';
  buscarTexto: string = '';
  readonly dialog = inject(MatDialog);

openDlgNewParticipante() {
  const dialogRef = this.dialog.open(NewParticipantComponent, {
    width: '500px',
    height: 'auto',
    maxWidth: '90vw',
    data: {}
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      // Agregar arriba en la tabla
      this.participantes = [result, ...this.participantes];
    }
  });
}

  /**
   * Editar participante -> abre EditParticipantComponent en dialog
   * recibe el participante, abre modal con data y, si devuelve datos (guardar),
   * actualiza la lista (por correo como identificador único).
   */
  openDlgEditParticipante(participante: any) {
    const dialogRef = this.dialog.open(EditParticipantComponent, {
      width: '500px',
      height: 'auto',
      maxWidth: '90vw',
      data: { ...participante }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        // buscar por correo y actualizar (si no tienes id único, usamos correo)
        const idx = this.participantes.findIndex(p => p.correo === participante.correo);
        if (idx !== -1) {
          this.participantes[idx] = result;
        } else {
          // fallback: si no está, lo agregamos
          this.participantes = [result, ...this.participantes];
        }
      }
    });
  }
openDlgViewParticipant(participante: any) {
  this.dialog.open(ViewParticipantComponent, {
    width: '500px',
    height: 'auto',
    maxWidth: '90vw',
    data: participante
  });
}

  /**
   * Eliminar participante -> abre DeleteParticipantComponent y si confirma,
   * lo elimina de la lista.
   */
  openDlgDeleteParticipante(participante: any) {
    const dialogRef = this.dialog.open(DeleteParticipantComponent, {
      width: '500px',
      height: 'auto',
      maxWidth: '90vw',
      data: participante
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed === true) {
        this.participantes = this.participantes.filter(p => p.correo !== participante.correo);
      }
    });
  }
openDlgInviteParticipant() {
  const dialogRef = this.dialog.open(InviteParticipantComponent, {
      width: '500px',
      height: 'auto',
      maxWidth: '90vw',
    data: { proyectos: this.proyectos }
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      console.log("Invitación enviada:", result);
      // Aquí luego puedes agregar lógica real de envío por API
    }
  });
}

  participantesFiltrados() {
    return this.participantes.filter(p => {
      const matchProyecto = this.filtroProyecto ? p.proyecto === this.filtroProyecto : true;
      const matchBuscar = this.buscarTexto
        ? p.nombres.toLowerCase().includes(this.buscarTexto.toLowerCase()) ||
          p.apellidos.toLowerCase().includes(this.buscarTexto.toLowerCase()) ||
          p.correo.toLowerCase().includes(this.buscarTexto.toLowerCase())
        : true;

      return matchProyecto && matchBuscar;
    });
  }
}
