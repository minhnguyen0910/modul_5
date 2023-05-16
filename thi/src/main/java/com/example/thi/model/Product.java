package com.example.thi.model;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_product")
    Integer id;
    @Column(name = "name_product")
    String name;
    @Column(name = "date")
    String date;
    @ManyToOne
    @JoinColumn(name = "id_type")
    Type type;

    public Product() {
    }

    public Product(Integer id, String name, String date, Type type) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.type = type;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }
}
