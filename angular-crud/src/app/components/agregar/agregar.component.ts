import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: []
})
export class AgregarComponent implements OnInit {

  forma:FormGroup;

  constructor( private router:Router, private service:PersonaService) { 
    this.forma = new FormGroup({
      'nombre' : new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      'apellido' : new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  ngOnInit() {
  }

  guardar(){
    console.log(this.forma.value);
    this.service.save(this.forma.value)
      .subscribe( resp => {
        alert("Se agrego una persona");
        this.router.navigate(["listar"]);
      })
  }

}
