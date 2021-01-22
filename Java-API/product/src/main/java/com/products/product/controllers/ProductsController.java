package com.products.product.controllers;

import com.products.product.domains.Product;
import com.products.product.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductsController {

    @Autowired
    private ProductService productService;

    @PostMapping //insert data in database h2-console, the id key its not necessary !
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
        Product savedProducts = productService.saveProduct((product));

        return new ResponseEntity(savedProducts, HttpStatus.CREATED);
    }

    @GetMapping // give you all the registers of database
    public ResponseEntity<List<Product>> findAll() {
        List<Product> products = productService.findAll();
        return ResponseEntity.ok(products);
    }

    @GetMapping("/{id}") // get an especific register by id, just put the id in endpoint
    public Optional<Product> findProductById (@PathVariable (value="id") long id) {
        return productService.findProductById(id);
    }
    
    @DeleteMapping("/{id}") // delete without return ! More easy  |>.<|. id is necessary in the endpoint
    public void deleteProductById (@PathVariable (value = "id") long id) {
        productService.deleteProductById(id);
    }

    @DeleteMapping // delete with json, return of deleted product ! Put the same register you want to delete
    public void deleteProduct (@RequestBody Product product) {
        productService.deleteProduct(product);
    }

    @PutMapping() // Put the same register you want to change
    public Product alterProduct (@RequestBody Product product) {
        return productService.alterProduct(product);
    }

}