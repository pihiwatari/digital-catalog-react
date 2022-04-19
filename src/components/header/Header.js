import React from "react";
import logo from "../../images/flex-logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/#" className="header-logo">
        <img src={logo} alt="flex logo.png" />
        <span>| Digital Catalog</span>
      </a>
      <nav className="header-navigation">
        <ul>
          <li>
            <a href="/#">Link 1</a>
          </li>
          <li>
            <a href="/#">Link 2</a>
          </li>
          <li>
            <a href="/#">Link 3</a>
          </li>
          <li>
            <a href="/#">Link 4</a>
          </li>
        </ul>
      </nav>
      <button className="header-upload-button">Upload a Model</button>
    </header>
  );
};

export default Header;
