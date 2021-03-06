import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor( private http:HttpClient ) { }

  private url = 'http://localhost:8080/personas';

  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }

  save(p: Persona){
    return this.http.post<Persona>(this.url, p);
  }

  delete(p: Persona){
    return this.http.delete<Persona>(this.url+'/'+p.id);
  }

  getPersonaID(id: number){
    return this.http.get<Persona>(this.url+'/'+id);
  }

}
