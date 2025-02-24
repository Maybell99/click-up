import React from "react";
import { Link } from "react-router-dom";

const ECommerceNavbar = () => {
  return (
    <nav className="bg-blue-900 p-4 text-gold-400 flex justify-between">
      <h1 className="text-2xl font-bold">Besi Shop</h1>
      <Link to="/">
        <button className="bg-gold-400 text-black px-4 py-2 rounded-lg">
          Home
        </button>
      </Link>
    </nav>
  );
};

export default ECommerceNavbar;
