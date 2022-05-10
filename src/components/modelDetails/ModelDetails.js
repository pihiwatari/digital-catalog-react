import React from "react";
import "./ModelDetails.css";

export default function ModelDetails() {
  const modelSpecs = [
    { spec: "x", value: 50, unit: "mm" },
    { spec: "y", value: 30, unit: "mm" },
    { spec: "z", value: 15, unit: "mm" },
    { spec: "volume", value: 5263.0, unit: "mm³" },
  ];

  return (
    <main className="model-container">
      <article className="model__display">
        <figure className="display__render">
          <img src="" alt="" />
        </figure>
        <div className="model__data-container">
          <h2 className="data__title">3D model title</h2>
          <ul className="data__specs-list">
            {modelSpecs.map((item, key) => {
              return (
                <li className="specs-list__item" key={key}>
                  <p className="item__key">
                    {item.spec.charAt(0).toUpperCase() + item.spec.slice(1)}
                  </p>
                  <p className="item__value">
                    {item.value} {item.unit}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
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
    </main>
  );
}
