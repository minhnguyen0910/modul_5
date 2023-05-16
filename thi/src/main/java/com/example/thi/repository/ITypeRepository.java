package com.example.thi.repository;

import com.example.thi.model.Product;
import com.example.thi.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ITypeRepository extends JpaRepository<Type,Integer> {
    @Query(value = "select * from type_product",nativeQuery = true)
    Iterable<Type> findAllType();
}
