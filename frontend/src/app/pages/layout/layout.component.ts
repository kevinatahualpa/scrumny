import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  
  constructor(private router: Router) {} // ✅ Inyección del router

  // gestionarArea() {
  //   this.router.navigate(['/areas']); // ✅ Usa barra inicial por convención
  // }
}