import React from "react";
import logo from "../../public/sweetpencilbdlogo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#F8F8EC] text-black p-2 border">
        <div className="container grid md:grid-cols-3 justify-items-center">
          <div className="flex flex-col">
            <img
              src={logo}
              alt="mousum shop logo"
              className="h-36 w-36 flex mx-auto md:block -mt-8"
            />
            <h1 className="text-xl md:text-2xl text-black font-bold -mt-4">
              <span className="text-orange-500">Sweet Pencil</span> BD-Online
            </h1>
            <p className="w-full">Best Online shop in Bangladesh</p>
          </div>
          <div>
            <h1 className="text-black font-bold">Services</h1>
            <ul>
              <li>Tablet</li>
              <li>Message Oil</li>
              <li>Food Products</li>
              <li>More</li>
            </ul>
          </div>
          <div>
            <h1 className="text-black font-bold">Contact Us</h1>
            <ul>
              <li>+8801622-604352</li>
              <li>sweetpencilonline11@gmail.com</li>
              <li>Dhaka, Bangladesh</li>
              <li></li>
            </ul>
          </div>
        </div>
        <h1 className="text-orange-500 text-center">
          All rights reserved by @sweetPencilBD.online
        </h1>
      </footer>
    </div>
  );
};

export default Footer;
