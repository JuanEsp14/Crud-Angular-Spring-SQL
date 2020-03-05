package com.spring.crud;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/personas"})
public class PersonaControlador {

	@Autowired
	PersonaService service;
	
	@GetMapping
	public List<Persona> getAll(){
		return service.getAll();
	}
}
