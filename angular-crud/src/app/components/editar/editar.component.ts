import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../models/persona';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarComponent implements OnInit {

  forma:FormGroup;

  constructor( private router:Router, private service:PersonaService) { 
    this.forma = new FormGroup({
      'id': new FormControl(),
      'nombre' : new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'apellido' : new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
    service.getPersonaID(+localStorage.getItem('id'))
        .subscribe(resp => this.forma.setValue(resp));
  }

  ngOnInit() {
  }

  actualizar(){
    console.log(this.forma.value);
    this.service.save(this.forma.value)
      .subscribe( resp => {
        alert("Se actualizó correctamente a la persona");
        this.router.navigate(["listar"]);
      })
  }

}
