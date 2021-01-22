package com.products.product.services;

import com.products.product.domains.Product;
import com.products.product.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product products) {
        return productRepository.save((products));
    }

    public List<Product> findAll() {
        /*List<Products> products = new ArrayList<>();
        productsRepository.findAll().forEach(products :: add);*/

        List<Product> products = new ArrayList<>();
        for (Product product : (List<Product>) productRepository.findAll()) {
            products.add(product);
        }

        return products;
    }

    public Optional<Product> findProductById(Long id) { return productRepository.findById(id); };

    public void deleteProductById(Long id) { productRepository.deleteById(id); };

    public void deleteProduct(Product product) { productRepository.delete(product); };

    public Product alterProduct(Product product) { return productRepository.save((product)); };
}
