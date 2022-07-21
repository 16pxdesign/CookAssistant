

package com.example.usbkiller;

public class Customer {

    private String name;
    private int gramature;
    private String recipe;

    public Customer(String name,  String recipe, int gramature) {
        this.name = name;
        this.gramature = gramature;
        this.recipe = recipe;
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

    public String getRecipe() {
        return recipe;
    }

    public void setRecipe(int number) {
        this.recipe = recipe;
    }
}