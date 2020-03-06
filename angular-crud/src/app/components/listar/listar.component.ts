import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { PersonaService } from '../../services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: []
})
export class ListarComponent implements OnInit {

  personas: Persona[] =  [];

  constructor( private service:PersonaService, private router:Router) { }

  ngOnInit() {
    this.service.getPersonas()
      .subscribe( resp => this.personas = resp );
  }

  editar(p: Persona):void{
    localStorage.setItem("id", p.id.toString()),
    this.router.navigate(['editar']);
  }

  delete(p: Persona):void{
    this.service.delete(p)
      .subscribe( () =>{ 
        this.personas = this.personas.filter(persona => persona !== p );
        alert("Se eliminó correctamente a la persona");        
      })
    
  }

}
