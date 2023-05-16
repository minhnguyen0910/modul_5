package com.example.thi.repository;

import com.example.thi.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select * from product",nativeQuery = true)
    Iterable<Product> findAllProduct();
    @Query(value = "update product set name=:product.name,date=:product.date,type_id=:product.type.id where id=:product.id", nativeQuery = true)
    void update(Product product);
    @Query(value = "select * from product where id_product=:idProduct",nativeQuery = true)
    Optional<Product> findById(Integer idProduct);
}
