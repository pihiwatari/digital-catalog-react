import React from "react";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MenuIcon({ marginRight, onMenuChange, openMenu }) {
  const handleMenuChange = () => {
    onMenuChange();
  };

  return (
    <IconContext.Provider
      value={{ size: "2rem", color: "var(--footer-bg-color)" }}
    >
      <div style={{ marginRight: marginRight }} onClick={handleMenuChange}>
        <FaBars style={{ display: openMenu === false ? "initial" : "none" }} />
        <FaTimes style={{ display: openMenu === true ? "initial" : "none" }} />
      </div>
    </IconContext.Provider>
  );
}
