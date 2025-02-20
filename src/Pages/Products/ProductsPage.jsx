import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/show-product");
      setProducts(res.data); // Directly store the fetched array
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="border-t border-gray-400 my-6">
      <h3 className="text-xl font-semibold md:text-4xl flex justify-center items-center my-6">
        <span className="border-b-2 border-yellow-600 font-bold">
          আমাদের কার্যকারী ভাইরাল প্রডাক্ট
        </span>
      </h3>

      {loading ? (
        <p className="text-center text-lg">লোড হচ্ছে...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen">
          {products.length > 0 ? (
            products.map((item) => <ProductCard item={item} key={item._id} />)
          ) : (
            <p className="text-center text-lg col-span-4">কোনো প্রোডাক্ট নেই</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
