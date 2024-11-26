import React from "react";
import Image from "next/image";

type ProductCardProps = {
  image: any;
  name: string;
  price: string;
  originalPrice: string;
  rating: number; 
  isNew: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  originalPrice,
  rating,
  isNew
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={`${
          index < rating ? "text-yellow-500" : "text-gray-300"
        } text-xl`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="w-full max-w-sm hover:scale-105 hover:shadow-md rounded-lg bg-white shadow-sm hover:border-2 border-2 border-transparent hover:border-primary relative transition-all duration-300">

       {
        !!isNew &&  <div className="absolute top-2 left-2 bg-primary z-20 text-sm text-background rounded-full px-1 py-0.5">
            <span>New</span>
        </div>
       }

      {/* Image */}
      <div className="relative w-full bg-secondary rounded-t-md h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain rounded-t-md p-2"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center py-2">
        <h3 className="text-lg font-semibold text-[#b19772]">{name}</h3>
        <div className="flex justify-center items-center mt-2">{renderStars()}</div>
        <div className="flex justify-center items-center mt-3 gap-2">
          <span className="text-gray-400 line-through">${originalPrice}</span>
          <span className="text-lg font-bold text-black">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
