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
	// // public String getUsername() {
	// // 	return username;
	// // }

	// // public void setUsername(String username) {
	// // 	this.username = username;
	// // }

	// // public String getDescription() {
	// // 	return description;
	// // }

	// // public void setDescription(String description) {
	// // 	this.description = description;
	// // }

	// @Override
	// public int hashCode() {
	// 	final int prime = 31;
	// 	int result = 1;
	// 	result = prime * result + ((description == null) ? 0 : description.hashCode());
	// 	result = prime * result + ((id == null) ? 0 : id.hashCode());
	// 	result = prime * result + ((username == null) ? 0 : username.hashCode());
	// 	return result;
	// }

	// @Override
	// public boolean equals(Object obj) {
	// 	if (this == obj)
	// 		return true;
	// 	if (obj == null)
	// 		return false;
	// 	if (getClass() != obj.getClass())
	// 		return false;
	// 	Product other = (Product) obj;
	// 	// if (description == null) {
	// 	// 	if (other.description != null)
	// 	// 		return false;
	// 	// } else if (!description.equals(other.description))
	// 	// 	return false;
	// 	if (id == null) {
	// 		if (other.id != null)
	// 			return false;
	// 	} else if (!id.equals(other.id))
	// 		return false;
	// 	// if (username == null) {
	// 	// 	if (other.username != null)
	// 	// 		return false;
	// 	// } else if (!username.equals(other.username))
	// 	// 	return false;
	// 	// return true;
	// }

}