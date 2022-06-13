import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../components/menuIcon/MenuIcon";
import NavMenu from "../../components/navMenu/NavMenu";
import logo from "../../images/flex-logo.png";
import { FaPlus } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [showText, setShowText] = useState(false);

  // -----Window width state management-----
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Check for window initial size

    if (width >= 768) {
      setOpenMenu(true);
      setShowText(true);
    } else {
      setOpenMenu(false);
      setShowText(false);
    }
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  // -----Window width state management-----

  const handleClick = () => {
    console.log(openMenu);
    setOpenMenu(!openMenu);
  };

  return (
    <header className="header">
      <div className="header-logo-container">
        {width < 768 ? (
          <MenuIcon
            onMenuChange={handleClick}
            openMenu={openMenu}
            marginRight="32px"
          />
        ) : (
          ""
        )}
        <Link to="/#" className="header-logo">
          <img src={logo} alt="flex logo.png" />
          <span style={{ display: showText ? "initial" : "none" }}>
            | Digital Catalog
          </span>
        </Link>
      </div>
      <div className="navigation-container">
        <NavMenu onMenuChange={handleClick} openMenu={openMenu} />
        <Link to={"/upload"} className="header-upload-button">
          {width >= 768 ? "Upload a model" : <FaPlus />}
        </Link>
      </div>
    </header>
  );
};

export default Header;
