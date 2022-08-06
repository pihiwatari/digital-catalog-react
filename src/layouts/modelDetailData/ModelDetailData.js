import React from "react";
import { Link } from "react-router-dom";
import "./ModelDetailData.css";

export default function ModelDetailData({ name, url, price, specs }) {
  return (
    <aside className="model__properties-container">
      <div className="properties__pricing">
        <p>Estimated printing cost</p>
        <h3>$ {price || 0}</h3>
        <Link
          className="download-button"
          to={"/files/" + url}
          target="_blank"
          download={name + ".stl"}
        >
          {"Download " + name}
        </Link>
      </div>
      <div className="properties__data-list-container">
        <ul className="data-list">
          {specs &&
            specs.map((item, key) => (
              <li className="data-list__item" key={key}>
                <h4>{item.title}</h4>
                <p>{item.value}</p>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
}
