package com.example.thi.controller;

import com.example.thi.model.Product;
import com.example.thi.service.IProductService;
import com.example.thi.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/product")
@CrossOrigin
public class ProductController {
    @Autowired
    IProductService iProductService;
    @Autowired
    ITypeService iTypeService;

    @GetMapping("")
    public ResponseEntity<List<Product>> list() {
        List<Product> listProduct = (List<Product>) iProductService.findAll();
        if (listProduct.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(listProduct, HttpStatus.OK);
    }

    @PutMapping("update")
    public void update(@RequestBody Product product) {
        System.out.println(product);
        iProductService.update(product);
    }

    @GetMapping("/search/{id}")
    public ResponseEntity<Product> searchById(@PathVariable Integer id) {
        Optional<Product> product = iProductService.findById(id);
        if (!product.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product.get(), HttpStatus.OK);
    }
}
