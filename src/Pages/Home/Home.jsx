import React from "react";
import Banner from "../../Compponets/Banner";
import ProductsPage from "../Products/ProductsPage";
// import Category from "../../Compponets/Category";
import FAQ from "./FAQ/FAQ";
import Gallery from "./Gallery/Gallery";
// import AllProducts from "./AllProducts/AllProducts";
// import BrandProduct from "./BrandProduct/BrandProduct";

function Home() {
  return (
    <div>
      <Banner></Banner>
      {/* <Category></Category> */}
      <ProductsPage></ProductsPage>
      <Gallery />
      <FAQ></FAQ>
    </div>
  );
}

export default Home;
