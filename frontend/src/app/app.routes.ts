import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
//nuevas rutas
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password/:token', component: ResetPasswordComponent },
    // { path: "layout", component: LayoutComponent }
    {
        path: "layout", component: LayoutComponent,
        children: [
            { path: "", component: UsuariosComponent }
        ]
    }
];
