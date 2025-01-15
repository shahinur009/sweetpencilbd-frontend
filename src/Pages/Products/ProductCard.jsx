import React from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  console.log(item.images[0]);
  // uploads/variant1.jpg
  // uploads/variant2.png
  return (
    <>
      <div>
        <Link
          to={`details/${item._id}`}
          className="bg-white shadow-md hover:shadow-lg border-b-[1px] border-r-[1px] border-l-[1px] border-t-0 border-transparent hover:border-b-[1px] hover:border-r-[1px] hover:border-l-[1px] hover:border-t-0 hover:border-gray-300 transition-shadow duration-300 p-2"
        >
          {/* Image Section */}
          <div className="w-full h-48 object-cover">
            <img src={item?.images[0]} alt="Product" className="h-full" />
          </div>

          {/* Product Details Section */}

          <div className="px-4 py-2 space-y-2">
            <h1 className="text-gray-700 font-semibold text-md truncate">
              {item?.name}
            </h1>
            <h1 className="text-gray-700 truncate">{item?.details}</h1>
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold text-lg">
                ৳{item?.price}
              </span>
            </div>
            <div className="flex gap-1">
              <FcRating />
              <FcRating />
              <FcRating />
              <FcRating />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
