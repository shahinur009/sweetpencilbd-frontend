import React from "react";
import Banner from "../../Compponets/Banner";
import ProductsPage from "../Products/ProductsPage";
import Category from "../../Compponets/Category";
// import AllProducts from "./AllProducts/AllProducts";
// import BrandProduct from "./BrandProduct/BrandProduct";

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ProductsPage></ProductsPage>
      {/* <AllProducts></AllProducts>
      <BrandProduct></BrandProduct> */}
    </div>
  );
}

export default Home;
