import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Compponets/Navbar";
import Footer from "../Compponets/Footer";

function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Main;
