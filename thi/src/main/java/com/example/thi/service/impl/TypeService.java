package com.example.thi.service.impl;

import com.example.thi.model.Type;
import com.example.thi.repository.ITypeRepository;
import com.example.thi.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TypeService implements ITypeService {
    @Autowired
    ITypeRepository iTypeRepository;

    @Override
    public Iterable<Type> findAll() {
        return iTypeRepository.findAllType();
    }
}
