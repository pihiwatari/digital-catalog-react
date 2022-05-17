import React from "react";
import data from "../../utils/mockupData";
import "./ModelDetailData.css";

export default function ModelDetailData({ price }) {
  return (
    <aside className="model__properties-container">
      <div className="properties__pricing">
        <p>Estimated printing cost</p>
        <h3>$ {price || "TBD"}</h3>
        <button>Download model</button>
      </div>
      <div className="properties__data-list-container">
        <ul className="data-list">
          {data.map((item, key) => (
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
