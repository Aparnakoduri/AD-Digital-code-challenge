package com.example.productdetails;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProductService {

	private static List<Product> products = new ArrayList<>();
    private static int id = 0;
    static String info="iPhone SE is the most powerful 11.94-cm (4.7) iPhone ever. It features the incredibly-fast A13 Bionic for incredible performance in apps, games, and photography, Portrait mode for studio-quality portraits and six lighting effects, Next-generation Smart HDR for incredible detail across highlights and shadows, Cinematic-quality 4K video, and all the advanced features of iOS. With long battery life and water resistance, it’s so much of the iPhone you love, in a not-so-big size.";
    static String title="i Phone SE";
    static String company="Apple";

	static {
        products.add(new Product(++id, title, company,info,"black",8,50000,5));
        products.add(new Product(++id, title, company,info,"blue",8,50000,5));
        products.add(new Product(++id, title, company,info,"white",8,50000,5));
        products.add(new Product(++id, title, company,info,"black",16,60000,5));
        products.add(new Product(++id, title, company,info,"blue",16,60000,5));
        products.add(new Product(++id, title, company,info,"white",16,60000,5));
        products.add(new Product(++id, title, company,info,"black",32,70000,5));
        products.add(new Product(++id, title, company,info,"blue",32,70000,5));
        products.add(new Product(++id, title, company,info,"white",32,70000,5));
	}

	public List<Product> findAll() {
		return products;
	}

	// public Product save(Product product) {
	// 	if (product.getId() == -1 || product.getId() == 0) {
	// 		product.setId(++id);
	// 		products.add(product);
	// 	} else {
	// 		deleteById(product.getId());
	// 		products.add(product);
	// 	}
	// 	return product;
	// }

	// public Product deleteById(int id) {
	// 	Product product = findById(id);

	// 	if (product == null)
	// 		return null;

	// 	if (products.remove(product)) {
	// 		return product;
	// 	}
	// 	return null;
	// }

	public Product findById(int id) {
		for (Product product : products) {
			if (product.getId() == id) {
				return product;
            }
        }
        return null;
    }
}