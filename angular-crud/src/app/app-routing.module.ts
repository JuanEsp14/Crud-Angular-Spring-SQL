import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ListarComponent } from './components/listar/listar.component';
import { EditarComponent } from './components/editar/editar.component';

export const routes: Routes = [
    { path: 'agregar', component: AgregarComponent },
    { path: 'editar', component: EditarComponent },
    { path: 'listar', component: ListarComponent },
    { path: '**',pathMatch: 'full', redirectTo: 'listar' },
]

@NgModule({
    exports:[ RouterModule ],
    imports: [ RouterModule.forChild(routes)]
})

export class AppRoutingModule{}

export const ROUTES = RouterModule.forRoot( routes );