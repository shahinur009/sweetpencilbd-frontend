import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Compponets/Navbar";
import Footer from "../Compponets/Footer";
import ReactWhatsapp from "react-whatsapp";

function Main() {
  <ReactWhatsapp number="+8801744604009" message="Hello World!!!" />;
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Main;
