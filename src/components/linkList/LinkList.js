import React from "react";
import { Link } from "react-router-dom";
import "./LinkList.css";

export default function LinkList({ title, links }) {
  return (
    <ul className="links-list">
      <h4>{title}</h4>
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
