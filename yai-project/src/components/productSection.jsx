import React from "react";
import ProductCard from "../components/productCard";

const ProductsSection = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <ProductCard name="Millet & Groundnut Snack" price="5.99" />
        <ProductCard name="Crunchy Groundnut Bars" price="4.99" />
      </div>
    </div>
  );
};

export default ProductsSection;
