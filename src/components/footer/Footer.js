import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const links = ["Home", "Ecommerce", "Enterprise", "About-Us"];
  return (
    <footer>
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
    </footer>
  );
}
