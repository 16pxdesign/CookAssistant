

package com.example.usbkiller;

public class Customer {

    private String name;
    private int gramature;
    private int number;

    public Customer(String name, int gramature, int number) {
        this.name = name;
        this.gramature = gramature;
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getGramature() {
        return gramature;
    }

    public void setGramature(int gramature) {
        this.gramature = gramature;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }
}