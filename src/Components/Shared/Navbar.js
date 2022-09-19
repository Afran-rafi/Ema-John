import React, { useState } from "react";
import "../CSS/Navbar.css";
import img from '../Images/Logo.svg'

const Navbar = () => {
  let Links = [
    { name: "Order", link: "/" },
    { name: "Order Review", link: "/" },
    { name: "Manage Inventory", link: "/" },
    { name: "Login", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="">
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7 back md:back">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <img src={img} alt="" />
            </span>
          </div>

          <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`back md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
