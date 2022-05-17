import React, { useState, useEffect } from "react";
import LinkList from "../linkList/LinkList";
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
      <div className="footer-container">
        {showLogo ? <img src={logo} alt="Flex logo" /> : ""}
        <div className="footer-links-container">
          <LinkList links={links} title={"Links list"} />
          <LinkList links={links} title={"Links list"} />
          <LinkList links={links} title={"Links list"} />
        </div>
      </div>
      <small>Developed by Elias Rayas</small>
    </footer>
  );
}
