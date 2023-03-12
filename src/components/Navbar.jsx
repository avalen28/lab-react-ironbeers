import React from "react";
import { Link } from "react-router-dom";
import navbar from "../assets/navbar-azul.png";

const Navbar = () => {
  return (
    // navbar tiene classname para ubicarlo en la consola
    <Link to={"/"} className="Navbar">
      <img src={navbar} alt="navbar" />
    </Link>
  );
};

export default Navbar;
