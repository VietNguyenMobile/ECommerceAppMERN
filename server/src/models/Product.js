const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
    averageReview: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);

const categories = ["men", "women", "kids", "accessories", "footwear"];
const brands = ["nike", "adidas", "puma", "levi", "zara", "h&m"];
const mockProducts = [
  {
    "image": "https://m.media-amazon.com/images/I/61+162RpUWL._AC_SY575_.jpg",
    "title":
      "Lightweight, breathable mesh upper with synthetic overlays for added durability & support",
    "description":
      "Lightweight, breathable mesh upper with synthetic overlays for added durability & support",
    "category": "footwear",
    "brand": "nike",
    "price": 129.99,
    "salePrice": 99.99,
    "totalStock": 50,
    "averageReview": 4.5,
  },
  {
    "image": "https://m.media-amazon.com/images/I/71df21asQnL._AC_SX569_.jpg",
    "title": "Classic Denim Jacket",
    "description":
      "Amazon Essentials Women's Jean Jacket (Available in Plus Size)",
    "category": "women",
    "brand": "levi",
    "price": 89.99,
    "salePrice": 79.99,
    "totalStock": 30,
    "averageReview": 4.2,
  },
  {
    "image": "https://m.media-amazon.com/images/I/71ByCqtqT-L._AC_SY550_.jpg",
    "title": "Summer Dress",
    "description":
      "LILLUSORY Women Summer Casual Sweater Dresses Short Sleeve Crewneck Knit Dress Trendy Outfits",
    "category": "women",
    "brand": "zara",
    "price": 59.99,
    "salePrice": 49.99,
    "totalStock": 25,
    "averageReview": 4.8
  },
  {
    "image": "https://m.media-amazon.com/images/I/81MAbk-pj-L._AC_SX466_.jpg",
    "title": "Kids T-Shirt",
    "description": "The Children'S Place Boys Basic Short Sleeve Tee",
    "category": "kids",
    "brand": "puma",
    "price": 24.99,
    "salePrice": 19.99,
    "totalStock": 40,
    "averageReview": 4.3
  },
  {
    "image": "https://m.media-amazon.com/images/I/71ABHkvRuSL._AC_SX569_.jpg",
    "title": "Leather Belt",
    "description": "Premium leather belt with metal buckle",
    "category": "accessories",
    "brand": "h&m",
    "price": 34.99,
    "salePrice": 29.99,
    "totalStock": 20,
    "averageReview": 4.6,
  },
];
