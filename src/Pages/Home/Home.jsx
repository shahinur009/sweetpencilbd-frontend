import React from "react";
import Banner from "../../Compponets/Banner";
import ProductsPage from "../Products/ProductsPage";
import Category from "../../Compponets/Category";

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <ProductsPage></ProductsPage>
    </div>
  );
}

export default Home;
