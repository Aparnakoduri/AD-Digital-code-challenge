package com.example.productdetails;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
public class ProductController {

	@Autowired
	private ProductService service;

	@GetMapping("/products")
	 public List<Product> getAllProducts() {
 	   return service.findAll();
	 }

	@GetMapping("/products/{id}")
	public Product getProduct(@PathVariable int id) {
		return service.findById(id);
	}

	
}
