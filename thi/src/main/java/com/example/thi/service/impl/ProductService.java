package com.example.thi.service.impl;

import com.example.thi.model.Product;
import com.example.thi.repository.IProductRepository;
import com.example.thi.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService implements IProductService {
    @Autowired
    IProductRepository iProductRepository;
    @Override
    public Iterable<Product> findAll() {
        return iProductRepository.findAllProduct();
    }

    @Override
    public void update(Product product) {
        iProductRepository.update(product);
    }

    @Override
    public Optional<Product> findById(Integer id) {
        return iProductRepository.findById(id);
    }
}
