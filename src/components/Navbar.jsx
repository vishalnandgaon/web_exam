import React from "react";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 shadow-md">
      <h1 className="text-xl font-bold">🛍️ Web3 Shopping Cart</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 rounded-md text-black w-64 outline-none"
      />
    </nav>
  );
};

export default Navbar;
