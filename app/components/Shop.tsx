import React, { useState } from "react";
import img1 from "../../public/static/perfume1.png";
import img2 from "../../public/static/perfume2.png";
import img3 from "../../public/static/perfume3.png";
import img4 from "../../public/static/perfume4.png";
import ShopProductCard from "./ShopProductCard";

const products = [
  {
    image: img1,
    name: "Glorious Eau",
    price: "200",
    originalPrice: "300",
    rating: 5,
    isNew: true,
    isBestSeller: false,
    isTopRated: false,
  },
  {
    image: img2,
    name: "Bibliotheque",
    price: "180",
    originalPrice: "250",
    rating: 4,
    isNew: false,
    isBestSeller: false,
    isTopRated: true,
  },
  {
    image: img3,
    name: "Dunas De Un",
    price: "220",
    originalPrice: "350",
    rating: 5,
    isNew: false,
    isBestSeller: false,
    isTopRated: true,
  },
  {
    image: img4,
    name: "Cuerpo Eau",
    price: "170",
    originalPrice: "280",
    rating: 5,
    isNew: false,
    isBestSeller: true,
    isTopRated: false,
  },

  {
    image: img1,
    name: "Verve Eau",
    price: "210",
    originalPrice: "320",
    rating: 4,
    isNew: false,
    isBestSeller: true,
    isTopRated: false,
  },
  {
    image: img2,
    name: "Serenity Scent",
    price: "250",
    originalPrice: "330",
    rating: 5,
    isNew: false,
    isBestSeller: false,
    isTopRated: true,
  },
  {
    image: img3,
    name: "Vibrance",
    price: "180",
    originalPrice: "260",
    rating: 3,
    isNew: false,
    isBestSeller: false,
    isTopRated: false,
  },
  {
    image: img4,
    name: "Aqua Essence",
    price: "230",
    originalPrice: "300",
    rating: 4,
    isNew: false,
    isBestSeller: true,
    isTopRated: false,
  },
  {
    image: img1,
    name: "Glorious Eau",
    price: "200",
    originalPrice: "300",
    rating: 5,
    isNew: true,
    isBestSeller: false,
    isTopRated: false,
  },
  {
    image: img2,
    name: "Bibliotheque",
    price: "180",
    originalPrice: "250",
    rating: 4,
    isNew: false,
    isBestSeller: false,
    isTopRated: true,
  },
  {
    image: img3,
    name: "Dunas De Un",
    price: "220",
    originalPrice: "350",
    rating: 5,
    isNew: false,
    isBestSeller: false,
    isTopRated: true,
  },
  {
    image: img4,
    name: "Cuerpo Eau",
    price: "170",
    originalPrice: "280",
    rating: 5,
    isNew: false,
    isBestSeller: true,
    isTopRated: false,
  },

  {
    image: img1,
    name: "Verve Eau",
    price: "210",
    originalPrice: "320",
    rating: 4,
    isNew: false,
    isBestSeller: true,
    isTopRated: false,
  },
  {
    image: img2,
    name: "Serenity Scent",
    price: "250",
    originalPrice: "330",
    rating: 5,
    isNew: false,
    isBestSeller: false,
    isTopRated: true,
  },
  {
    image: img3,
    name: "Vibrance",
    price: "180",
    originalPrice: "260",
    rating: 3,
    isNew: false,
    isBestSeller: false,
    isTopRated: false,
  },
  {
    image: img4,
    name: "Aqua Essence",
    price: "230",
    originalPrice: "300",
    rating: 4,
    isNew: false,
    isBestSeller: true,
    isTopRated: false,
  },
];

const Shop: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Bestseller");

  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
  };

  const filterProducts = () => {
    switch (selectedFilter) {
      case "Bestseller":
        return products.filter((product) => product.isBestSeller);
      case "New Arrivals":
        return products.filter((product) => product.isNew);
      case "Top Rated":
        return products.filter((product) => product.isTopRated);
      default:
        return products;
    }
  };

  const filteredProducts = filterProducts();
  console.log("Filtered Products", filteredProducts?.length);

  return (
    <>
      <div className="w-full md:w-[75%] flex items-center justify-center mt-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          <button
            className={`py-2.5 w-40 border rounded-full text-lg font-semibold transition-all duration-300 
            ${
              selectedFilter === "Bestseller"
                ? "bg-primary text-white rounded-full"
                : "bg-black text-white "
            }`}
            onClick={() => handleFilterSelect("Bestseller")}
          >
            Bestseller
          </button>
          <button
            className={`py-2.5 w-40 rounded-full border text-lg font-semibold transition-all duration-300 
          ${
            selectedFilter === "New Arrivals"
              ? "bg-primary text-white "
              : "bg-black text-white"
          }`}
            onClick={() => handleFilterSelect("New Arrivals")}
          >
            New Arrivals
          </button>
          <button
            className={`py-2.5 w-40 rounded-full border text-lg font-semibold transition-all duration-300 
            ${
              selectedFilter === "Top Rated"
                ? "bg-primary text-white "
                : "bg-black text-white"
            }`}
            onClick={() => handleFilterSelect("Top Rated")}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="w-[95%] py-16 sm:w-[80%] md:w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <ShopProductCard
            key={index}
            isNew={product.isNew}
            image={product.image}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
            isBestSeller={product.isBestSeller}
            isTopRated={product.isTopRated}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
