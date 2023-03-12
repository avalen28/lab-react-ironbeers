import React from "react";
import { Link } from "react-router-dom";
import navbar from "../assets/navbar-azul.png";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"} className="Navbar">
        <img src={navbar} alt="navbar" className="navbar" />
      </Link>
    </div>
  );
};

export default Navbar;
