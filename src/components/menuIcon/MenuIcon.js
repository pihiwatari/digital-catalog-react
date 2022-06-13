import React from "react";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MenuIcon({ marginRight, onMenuChange, openMenu }) {
  /**
   * Responsive menu icon based on openMenu prop
   */
  const handleMenuChange = () => {
    onMenuChange();
  };

  return (
    <IconContext.Provider
      value={{ size: "2rem", color: "var(--footer-bg-color)" }}
    >
      <div style={{ marginRight: marginRight }} onClick={handleMenuChange}>
        <FaBars style={{ display: !openMenu ? "initial" : "none" }} />
        <FaTimes style={{ display: openMenu ? "initial" : "none" }} />
      </div>
    </IconContext.Provider>
  );
}
