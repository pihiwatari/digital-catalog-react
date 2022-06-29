import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../components/menuIcon/MenuIcon";
import NavMenu from "../../components/navMenu/NavMenu";
import logo from "../../images/flex-logo.png";
import { FaPlus } from "react-icons/fa";
import "./Header.css";
import useWindowWidth from "../../hooks/useWindowWidth";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { showItem } = useWindowWidth();

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="header">
      <div className="header-logo-container">
        {!showItem && (
          <MenuIcon
            onMenuChange={handleClick}
            openMenu={openMenu}
            marginRight="32px"
          />
        )}
        <Link to="/#" className="header-logo">
          <img src={logo} alt="flex logo.png" />
          <span style={{ display: showItem ? "initial" : "none" }}>
            | Digital Catalog
          </span>
        </Link>
      </div>
      <div className="navigation-container">
        <NavMenu onMenuChange={handleClick} openMenu={openMenu} />
        <Link to={"/upload"} className="header-upload-button">
          {showItem ? "Upload a model" : <FaPlus />}
        </Link>
      </div>
    </header>
  );
};

export default Header;
