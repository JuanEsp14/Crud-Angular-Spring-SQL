import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '**',pathMatch: 'full', redirectTo: 'inicio' },
]

@NgModule({
    exports:[ RouterModule ],
    imports: [ RouterModule.forChild(routes)]
})

export class AppRoutingModule{}

export const ROUTES = RouterModule.forRoot( routes );