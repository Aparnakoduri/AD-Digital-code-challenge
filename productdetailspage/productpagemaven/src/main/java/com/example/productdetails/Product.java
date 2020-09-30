package com.example.productdetails;


public class Product {
	private int id;
	private String title;
    private String company;
    private String info;
    private String colour;
    private int size;
    private int price;
    private int count;



	public Product() {

	}

	public Product(int id,String title,String company,String info,String colour,int size,int price,int count) {
		super();
        this.id = id;
        this.title = title;
        this.company= company;
        this.info= info;
        this.colour= colour;
        this.size= size;
        this.price=price;
        this.count= count;
    }
    

	public int getId() {
		return id;
	}

	// public void setId(int id) {
	// 	this.id = id;
    // }
    public String getTitle() {
		return title;
	}

	// public void setTitle(String title) {
	// 	this.title = title;
    // }

    public String getCompany() {
		return company;
    }
    
    public String getInfo() {
		return info;
    }
    
    public String getColour() {
		return colour;
	}

    public int getSize() {
		return size;
    }
    
    public int getPrice() {
		return price;
    }
    
    public int getCount() {
		return count;
    }
    
    // public void setCount() {
	// 	this.count=count;
	// }
	

}
