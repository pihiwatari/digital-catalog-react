import React from "react";
import "./ModelDetailData.css";

export default function ModelDetailData() {
  return (
    <aside className="model__properties-container">
      <div className="properties__pricing">
        <p>Estimated printing cost</p>
        <h3>$ 999.99</h3>
        <button>Download model</button>
      </div>
      <div className="properties__data-list-container">
        <ul className="data-list">
          <li className="data-list__item">
            <h4>Category</h4>
            <p>End-use parts</p>
          </li>
          <li className="data-list__item">
            <h4>Category</h4>
            <p>End-use parts</p>
          </li>
          <li className="data-list__item">
            <h4>Category</h4>
            <p>End-use parts</p>
          </li>
        </ul>
      </div>
    </aside>
  );
}
