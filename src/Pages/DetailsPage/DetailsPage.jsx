import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bg from "../../../public/Login-background.jpg";
import { FaStar } from "react-icons/fa";
import productData from "../../../public/fakeData";

function DetailsPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
    courierFee: "",
    totalCost: 0,
  });

  // Get product by ID
  const getProductById = () => {
    setLoading(true);
    const foundProduct = productData.product.find((p) => p._id === id);
    setProducts(foundProduct);
    setFormData((prev) => ({
      ...prev,
      totalCost: foundProduct?.price || 0,
    }));
    setLoading(false);
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      totalCost:
        name === "courierFee"
          ? parseFloat(value || 0) + (products?.price || 0)
          : prev.totalCost,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sweetpencilonline11@gmail.com?subject=${encodeURIComponent(
      "New Order"
    )}&body=${encodeURIComponent(
      `Customer Name: ${formData.customerName}
  Phone: ${formData.phone}
  Address: ${formData.address}
  Product Name: ${products?.name}
  Product Price: $${products?.price}
  Courier Fee: $${formData.courierFee}
  Total Cost: $${formData.totalCost}`
    )}`;
    window.location.href = mailtoLink;
    alert("Order submitted! We will contact you shortly.");
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!products) {
    return <p>Product not found.</p>;
  }

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center flex flex-col md:flex-row justify-between p-8 mx-auto pt-32"
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
            <strong>Description:</strong> {products.description}
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

        {/* Customer Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-4 p-4 bg-white rounded shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Order Form</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="Enter your address"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Courier Fee
            </label>
            <input
              type="number"
              name="courierFee"
              value={formData.courierFee}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              placeholder="Enter courier fee"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Total Cost</label>
            <input
              type="text"
              value={`$${formData.totalCost}`}
              className="w-full border rounded p-2 bg-gray-100"
              readOnly
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-800"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default DetailsPage;
