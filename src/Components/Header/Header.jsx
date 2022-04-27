import React from "react";
import "./Header.css";

import Navbar from "./Navbar/Navbar";
import LeftText from "./HeaderLeftText/LeftText";
import Info from "./HeaderRightInfo/Info";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="below_navbar">
        <LeftText />
        <Info />
      </div>
    </header>
  );
};

export default Header;
