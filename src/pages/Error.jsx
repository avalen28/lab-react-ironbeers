import React from "react";
import error from "../assets/error.gif";

import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <div>
      <Navbar />
      <p className="error-msg">oops! something is happening...</p>
      <img src={error} alt="error gif" />
    </div>
  );
};

export default Error;
