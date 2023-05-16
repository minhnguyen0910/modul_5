package com.example.thi.model;

import javax.persistence.*;

@Entity
@Table(name = "type_product")
public class Type {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_type")
    Integer id;
    @Column(name = "name_type")
    String name;

    public Type() {
    }

    public Type(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
