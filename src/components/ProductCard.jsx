import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-64 hover:scale-105 duration-200 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-48 object-contain mb-4"
      />
      <h3 className="text-gray-800 font-semibold text-center line-clamp-2 mb-2">
        {product.title}
      </h3>
      <p className="text-gray-600 font-medium mb-3">${product.price}</p>
      <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
