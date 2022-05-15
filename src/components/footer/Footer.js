import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/flex-logo.png";
import "./Footer.css";

export default function Footer() {
  const [showLogo, setShowLogo] = useState(false);
  // -----Window width state management-----
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Check for window initial size

    if (width >= 768) {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  // -----Window width state management-----

  const links = ["Home", "Ecommerce", "Enterprise", "About-Us"];
  return (
    <footer>
      {showLogo ? <img src={logo} alt="Flex logo" /> : ""}
      <div className="footer-links-container">
        <ul>
          <h4>Links title</h4>
          {links.map((link, key) => {
            return (
              <li key={key}>
                <Link to={link.toLowerCase()}>{link}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h4>Links title</h4>
          {links.map((link, key) => {
            return (
              <li key={key}>
                <Link to={link.toLowerCase()}>{link}</Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h4>Links title</h4>
          {links.map((link, key) => {
            return (
              <li key={key}>
                <Link to={link.toLowerCase()}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
