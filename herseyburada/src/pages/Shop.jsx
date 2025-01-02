import React from "react";
import Shopcard from "../components/Shopcard";
import Header from "../layout/header";

const Shop = () => {
  // Örnek veri
  const products = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/150",
      title: "Graphic Design",
      department: "Design Department",
      oldPrice: "16.48",
      newPrice: "6.48",
      colors: ["#007bff", "#ff5722", "#4caf50"],
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/150",
      title: "Web Development",
      department: "IT Department",
      oldPrice: "19.99",
      newPrice: "9.99",
      colors: ["#e91e63", "#2196f3", "#ffc107"],
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/150",
      title: "Photography Basics",
      department: "Arts Department",
      oldPrice: "14.99",
      newPrice: "7.99",
      colors: ["#9c27b0", "#00bcd4", "#8bc34a"],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Shopcard
              key={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              department={product.department}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              colors={product.colors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
