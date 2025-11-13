import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  // Fetching products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  // Search filter
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold mb-2">Store</h2>
        <p className="text-gray-500">Buy with web3 wallet!</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-6 pb-10">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-gray-600 text-lg">No products found.</p>
        )}
      </div>
    </>
  );
};

export default Store;
