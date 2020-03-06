package com.spring.crud;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface PersonaRepository extends Repository<Persona, Integer> {
	
	List<Persona> findAll();
	Persona getById(int id);
	Persona save(Persona p);
	void delete(Persona p);

}
