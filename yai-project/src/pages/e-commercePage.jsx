import React from "react";
import ECommerceNavbar from "../pages/e-commerceNavbar";
import ProductCard from "../components/productCard";
import Footer from "../components/footer";

const ECommercePage = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <ECommerceNavbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold text-center text-blue-900">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <ProductCard name="Millet & Groundnut Snack" price="5.99" />
          <ProductCard name="Crunchy Groundnut Bars" price="4.99" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ECommercePage;
