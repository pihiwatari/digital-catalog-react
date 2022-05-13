import React from "react";
import MenuIcon from "../menuIcon/MenuIcon";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export default function NavMenu({ onMenuChange, openMenu }) {
  // Display attr based on openMenu boolean
  const showMenu = openMenu ? "flex" : "none";

  return (
    <div className="nav-container" style={{ display: showMenu }}>
      <div className="nav-icon-container">
        <MenuIcon
          onMenuChange={onMenuChange}
          openMenu={openMenu}
          marginRight="0"
        />
      </div>
      <ul className="nav-links-list">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="card">Card</Link>
        </li>
      </ul>
    </div>
  );
}
