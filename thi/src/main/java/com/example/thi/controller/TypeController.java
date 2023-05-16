package com.example.thi.controller;

import com.example.thi.model.Type;
import com.example.thi.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/type")
@CrossOrigin
public class TypeController {
    @Autowired
    ITypeService iTypeService;
    @GetMapping("")
    public ResponseEntity<List<Type>> findAll(){
        List<Type> list= (List<Type>) iTypeService.findAll();
        if (list.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
            return new ResponseEntity<>(list, HttpStatus.OK);
    }
}
