import React from "react";
import logo from "../../images/flex-logo.png";
import { FaPlus } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/#" className="header-logo">
        <img src={logo} alt="flex logo.png" />
        <span>| Digital Catalog</span>
      </a>
      <div>
        <button className="header-upload-button">
          <FaPlus />
        </button>
      </div>
    </header>
  );
};

export default Header;
