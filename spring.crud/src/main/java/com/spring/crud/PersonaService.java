package com.spring.crud;

import java.util.List;

public interface PersonaService {
	
	//Metodo para obtener todas las personas
	List<Persona> getAll();
	
	//Metodo para obtener una persona por Id
	Persona getById(int id);
	
	//Metodo para agregar una persona
	Persona save(Persona p);
	
	//Metodo para editar una persona
	Persona edit(Persona p);
		
	//Metodo para borrar una persona
	Persona delete(int id);

}
