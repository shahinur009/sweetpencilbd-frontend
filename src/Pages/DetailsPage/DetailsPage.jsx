import axios from "axios";
import React, { useEffect, useState } from "react";
import bg from "../../../public/Login-background.jpg";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";

function DetailsPage() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  //Get Products here
  const getProducts = async () => {
    try {
      const res = await axios.get(
        `https://backend-six-rosy.vercel.app/show-product/${id}`
      );
      setProduct(res?.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };
  useEffect(() => {
    setLoading(true);
    getProducts();
    setLoading(false);
  }, []);
  // Format the product images for ImageGallery
  // const images =
  //   product.images?.map((img) => ({
  //     original: img,
  //     thumbnail: img,
  //   })) || [];
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-cover bg-center flex flex-col md:flex-row justify-between p-8 mx-auto pt-28"
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          {/* <img src={product.image} alt="" /> */}
          {/* {images.length > 0 ? (
          <ImageGallery
            isFullscreen={false}
            thumbnailPosition={"left"}
            items={images}
            showThumbnails={true}
            additionalClass="custom-gallery"
          />
        ) : (
          <p>No images available</p>
        )} */}
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-4 md:pl-20">
          {/* {product.name} */}
          <h1 className="text-2xl font-semibold mb-2"></h1>
          <div className="text-sm mb-4 flex gap-1">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <div className="text-lg mb-2">
            <p>
              <strong>Category:</strong>
            </p>
            {/* {product.category} */}
            <p>
              <strong>Brand:</strong>
            </p>
            {/* {product.brand || "Unknown"} */}
            <p>
              <strong>Model:</strong>
            </p>
            {/* {product.model || "N/A"} */}
          </div>
          <button className="mt-4 px-4 ml-2 py-2 font-semibold text-white  rounded bg-blue-600  hover:bg-blue-800 ">
            Call For Buy: +880 1622-604352
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;
