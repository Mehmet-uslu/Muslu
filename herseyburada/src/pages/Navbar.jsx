import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Sol kısım */}
      <div className="text-lg font-bold">Hersey Burada</div>

      {/* Orta kısım */}
      <div className="hidden md:flex space-x-6">
        <a href="#home" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="#product" className="text-gray-600 hover:text-gray-900">
          Product
        </a>
        <a href="#pricing" className="text-gray-600 hover:text-gray-900">
          Pricing
        </a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </a>
      </div>

      {/* Sağ kısım */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">
          <a href="/login" className="fas fa-user">log out</a>
        </button>
        <button className="text-gray-600 hover:text-gray-900">
          <a href="/signup"className="fas fa-search">sign up</a>
        </button>
        <button className="text-gray-600 hover:text-gray-900">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <button className="md:hidden text-gray-600 hover:text-gray-900">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
