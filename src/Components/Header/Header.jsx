import React from "react";
import "./Header.css";

import Navbar from "./Navbar/Navbar";
import LeftText from "./HeaderLeftText/LeftText";
import Info from "./HeaderRightInfo/Info";

const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="below_navbar">
        <LeftText />
        <Info />
      </div>
    </div>
  );
};

export default Header;
