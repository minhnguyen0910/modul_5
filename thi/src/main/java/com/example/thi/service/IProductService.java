package com.example.thi.service;

import com.example.thi.model.Product;

import java.util.Optional;

public interface IProductService {
    Iterable<Product> findAll();
    void update(Product product);
    Optional<Product> findById(Integer id);
}
