import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http:HttpClient ) { }

  private url = 'http://localhost:8080/crud-backend/personas';

  getPersonas(){
    return this.http.get<Persona[]>(this.url);
  }

}
