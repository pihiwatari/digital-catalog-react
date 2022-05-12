import React, { useState } from "react";
import logo from "../../images/flex-logo.png";
import { FaPlus } from "react-icons/fa";
import MenuIcon from "../menuIcon/MenuIcon";
import NavMenu from "../navMenu/NavMenu";
import "./Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    console.log(openMenu);
    setOpenMenu(!openMenu);
  };

  return (
    <header className="header">
      <div className="header-logo-container">
        <MenuIcon onMenuChange={handleClick} openMenu={openMenu} />
        <a href="/#" className="header-logo">
          <img src={logo} alt="flex logo.png" />
          <span>| Digital Catalog</span>
        </a>
      </div>
      <div className="navigation-container">
        <NavMenu onMenuChange={handleClick} openMenu={openMenu} />
        <button className="header-upload-button">
          <FaPlus />
        </button>
      </div>
    </header>
  );
};

export default Header;
