import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    // { path: "layout", component: LayoutComponent }
    {
        path: "layout", component: LayoutComponent,
        children: [
            { path: "", component: UsuariosComponent }
        ]
    }
];
