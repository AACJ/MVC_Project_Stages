package com.example.ProjectStages.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CadastroController {

	@RequestMapping("/cadastro")
	public String cadastro() {
		return "cadastro";
	}
}
