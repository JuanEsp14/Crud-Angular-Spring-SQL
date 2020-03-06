import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor( private http:HttpClient ) { }

  private url = 'http://localhost:8080/personas/listar';

  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }

}
