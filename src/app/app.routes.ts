import { Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home.component';
import { MenuComponent } from './pages/Menu/menu.component';
import { EmpleadosComponent } from './pages/Empleados/empleados.component';
import { EquiposComponent } from './pages/Equipos/equipos.component';


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'empleados', component: EmpleadosComponent},
    { path: 'equipos' , component: EquiposComponent}
];