import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-rose-400 p-4 text-gold-400 flex justify-between">
      <h1 className="text-2xl font-bold">Besi Ventures</h1>
      <Link to="/shop">
        <button className="bg-gold-400 text-blue-900 px-4 py-2 rounded-lg">
          Visit Our Shop
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
