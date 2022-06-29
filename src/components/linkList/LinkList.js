import React from "react";
import { Link } from "react-router-dom";
import "./LinkList.css";

export default function LinkList({ links }) {
  return (
    <ul className="links-list">
      {links.map((link, key) => {
        return (
          <li key={key}>
            <Link to={link.toLowerCase()}>{link}</Link>
          </li>
        );
      })}
    </ul>
  );
}
