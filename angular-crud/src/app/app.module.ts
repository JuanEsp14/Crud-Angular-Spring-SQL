import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ROUTES } from './app-routing.module';
import { ListarComponent } from './components/listar/listar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';
import { PersonaService } from './services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ROUTES
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
