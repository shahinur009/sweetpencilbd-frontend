import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import bg from "../../../public/Login-background.jpg";
import { FaStar } from "react-icons/fa";
import productData from "../../../public/fakeData";
import Swal from "sweetalert2";
import axios from "axios";

function DetailsPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    address: "",
    courierFee: "",
    quantity: 1, // Add a quantity field with initial value of 1
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
    setFormData((prev) => {
      let updatedValue = value;

      // Update the quantity and total cost
      if (name === "quantity") {
        updatedValue = Math.max(1, parseInt(value) || 1); // Prevent 0 or negative values
      }

      return {
        ...prev,
        [name]: updatedValue,
        totalCost:
          name === "quantity"
            ? updatedValue * (products?.price || 0) +
              (parseFloat(formData.courierFee) || 0)
            : name === "courierFee"
            ? parseFloat(updatedValue || 0) +
              prev.quantity * (products?.price || 0)
            : prev.totalCost,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      customerName: formData.customerName,
      phone: formData.phone,
      address: formData.address,
      productName: products?.name,
      productPrice: products?.price,
      quantity: formData.quantity,
      courierFee: formData.courierFee,
      totalCost: formData.totalCost,
      orderDate: new Date(),
    };

    try {
      // Send the order data to the backend API using axios
      const response = await axios.post(
        "http://localhost:5000/place-order",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Order submitted! We will contact you shortly.",
          icon: "success",
          confirmButtonText: "Okay",
        });
        navigate("/");
      } else {
        Swal.fire({
          title: "Oops!",
          text: response.data.message || "Something went wrong.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.error("Error placing order:", error);
      // Error alert with SweetAlert2
      Swal.fire({
        title: "Error",
        text: "An error occurred. Please try again.",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
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
        <img
          src={products?.images[0]}
          alt={products.name}
          className="w-3/4 md:h-96 h-full"
        />
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
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              min="1"
              required
            />
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
              value={`$${formData.totalCost.toFixed(2)}`}
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
