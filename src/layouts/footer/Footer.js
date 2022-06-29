import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth.js";
import logo from "../../images/flex-logo.png";
import "./Footer.css";

export default function Footer() {
  const { showItem } = useWindowWidth();

  return (
    <footer>
      <div className="footer-container">
        {showItem && <img src={logo} alt="Flex logo" />}
      </div>
      <small>Developed by Elias Rayas</small>
    </footer>
  );
}
