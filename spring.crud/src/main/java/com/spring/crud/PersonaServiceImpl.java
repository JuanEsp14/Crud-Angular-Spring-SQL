package com.spring.crud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonaServiceImpl implements PersonaService {
	
	@Autowired
	private PersonaRepository repo;
	
	@Override
	public List<Persona> getAll() {
		return repo.findAll();
	}

	@Override
	public Persona getById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Persona save(Persona p) {
		return repo.save(p);
	}

	@Override
	public Persona edit(Persona p) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Persona delete(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
