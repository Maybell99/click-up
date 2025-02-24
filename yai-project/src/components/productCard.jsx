import React from "react";

const ProductCard = ({ name, price }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <img src="https://via.placeholder.com/200" alt={name} className="w-full rounded-md" />
      <h2 className="text-xl font-bold mt-4">{name}</h2>
      <p className="text-gray-600 mt-2">${price}</p>
      <button className="mt-4 px-4 py-2 bg-rose-700 text-white rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
