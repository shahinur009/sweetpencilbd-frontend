import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bg from "../../../public/Login-background.jpg";
import { FaStar } from "react-icons/fa";
import productData from "../../../public/fakeData";

function DetailsPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const { id } = useParams();

  // Get product by ID
  const getProductById = () => {
    setLoading(true);
    const foundProduct = productData.product.find((p) => p._id === id);
    setProducts(foundProduct);
    setLoading(false);
  };

  useEffect(() => {
    getProductById();
  }, [id]);
  console.log("id", id, "product", products?.images[0]);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!products) {
    return <p>Product not found.</p>;
  }

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center flex flex-col md:flex-row justify-between p-8 mx-auto pt-28"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={products?.images[0]} alt={products.name} className="w-3/4" />
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 p-4 md:pl-20">
        <h1 className="text-2xl font-semibold mb-2">{products.name}</h1>
        <div className="text-sm mb-4 flex gap-1">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
        <div className="text-lg mb-2">
          <p>
            <strong>Category:</strong> {products.category}
          </p>
          <p>
            <strong>Brand:</strong> {products.brand || "Unknown"}
          </p>
          <p>
            <strong>Price:</strong> ${products.price.toFixed(2)}
          </p>
          <p>
            <strong>Stock:</strong> {products.stock}
          </p>
        </div>
        <div className="md:flex justify-center items-center space-x-4">
          <a
            href="tel:+8801622604352"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 font-semibold text-white rounded bg-blue-600 hover:bg-blue-800"
          >
            Call: +880 1622-604352
          </a>
          <a
            href="https://wa.me/+8801622604352"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 font-semibold text-white rounded bg-green-600 hover:bg-green-800"
          >
            WhatsApp: +880 1622-604352
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
