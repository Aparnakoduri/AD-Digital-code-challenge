package com.example.productdetails;


//import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
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

	// @DeleteMapping("/instructors/{username}/courses/{id}")
	// public ResponseEntity<Void> deleteCourse(@PathVariable String username, @PathVariable long id) {

	// 	Course course = courseManagementService.deleteById(id);

	// 	if (course != null) {
	// 		return ResponseEntity.noContent().build();
	// 	}

	// 	return ResponseEntity.notFound().build();
	// }

	// @PutMapping("/{id}")
	// public ResponseEntity<Product> updateProduct(@PathVariable int id,
	// 		@RequestBody Product product) {

	// 	Product productUpdated = service.save(product);

	// 	return new ResponseEntity<Product>(product, HttpStatus.OK);
	// }

	// @PostMapping("/")
	// public ResponseEntity<Void> createCourse(@PathVariable String username, @RequestBody Course course) {

	// 	Course createdCourse = courseManagementService.save(course);

	// 	// Location
	// 	// Get current resource url
	// 	/// {id}
	// 	URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdCourse.getId())
	// 			.toUri();

	// 	return ResponseEntity.created(uri).build();
	// }

}
