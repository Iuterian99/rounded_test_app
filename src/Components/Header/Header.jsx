import React from "react";
import "./Header.css";

import Navbar from "./Navbar/Navbar";
import LeftText from "./HeaderLeftText/LeftText";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <LeftText />
    </div>
  );
};

export default Header;
