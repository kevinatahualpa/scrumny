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

  userName: string = '';
  menuOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Usuario';
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }

}