import React from "react";
import img1 from "../../public/static/perfume1.png";
import img2 from "../../public/static/perfume2.png";
import img3 from "../../public/static/perfume3.png";
import img4 from "../../public/static/perfume4.png";
import ProductCard from "./Productcard";

const DealsofDay = () => {
  const products = [
    { image: img1, name: "Glorious Eau", price: "200", originalPrice: "300", rating: 5 ,isNew: true },
    { image: img2, name: "Bibliotheque", price: "180", originalPrice: "250", rating: 4 ,isNew: false },
    { image: img3, name: "Dunas De Un", price: "220", originalPrice: "350", rating: 5 ,isNew: false },
    { image: img4, name: "Cuerpo Eau", price: "170", originalPrice: "280", rating: 5 ,isNew: true },
  ];

  return (
    <div className="w-[95%] py-16 sm:w-[80%] md:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          isNew={product.isNew}
          image={product.image}
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default DealsofDay;
