import React from "react";
import MenuIcon from "../menuIcon/MenuIcon";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export default function NavMenu({ onMenuChange, openMenu }) {
  return (
    <div className="nav-container">
      <MenuIcon onMenuChange={onMenuChange} openMenu={openMenu} />
      <ul className="nav-links-list">
        <li className="link">
          <Link to="/">Sample Link</Link>
        </li>
        <li>
          <Link to="/">Sample Link</Link>
        </li>
      </ul>
    </div>
  );
}
