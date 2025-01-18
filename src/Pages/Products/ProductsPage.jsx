import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productProductData from "../../../public/fakeData";

function ProductsPage() {
  // const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const getProducts = async () => {
  //   const res = data.product;
  //   setProduct(res);
  //   // const res = await axios.get(
  //   //   "https://backend-six-rosy.vercel.app/show-product"
  //   // );
  //   // console.log(res.data)
  //   // setProduct(data.product);
  //   // console.log(data.product);
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   getProducts();
  //   setLoading(false);
  // }, []);
  // const data = data.product;
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold md:text-4xl flex justify-center items-center my-6 ">
          <span className="border-b-2 border-yellow-600 font-bold">
            New Products
          </span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen">
          {productProductData?.product.map((item) => (
            <ProductCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
