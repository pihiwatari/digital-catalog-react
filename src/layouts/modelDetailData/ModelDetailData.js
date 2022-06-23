import React from "react";
import "./ModelDetailData.css";

export default function ModelDetailData({ name, url, price, specs }) {
  const handleClick = () => {
    alert(url);
  };

  return (
    <aside className="model__properties-container">
      <div className="properties__pricing">
        <p>Estimated printing cost</p>
        <h3>$ {price || "TBD"}</h3>
        <a download={name} href={url} target="_blank" onClick={handleClick}>
          Download model
        </a>
      </div>
      <div className="properties__data-list-container">
        <ul className="data-list">
          {specs.map((item, key) => (
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
