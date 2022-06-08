import React, { useState, useEffect } from "react";
import Render3dModel from "../../components/render3dModel/Render3dModel";
import "./ModelDetailDisplay.css";

export default function ModelDetailDisplay({ name, date, url }) {
  const [showText, setShowText] = useState(false);

  // -----Window width state management-----
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Check for window initial size

    if (width >= 768) {
      setShowText(true);
    } else {
      setShowText(false);
    }
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  // -----Window width state management-----

  const modelSpecs = [
    { spec: "x", value: 50, unit: "mm" },
    { spec: "y", value: 30, unit: "mm" },
    { spec: "z", value: 15, unit: "mm" },
    { spec: "volume", value: 5263.0, unit: "mm³" },
  ];
  return (
    <article className="model__display">
      <figure className="display__render">
        <Render3dModel url={url} />
      </figure>
      <div className="model__data-container">
        <div className="data__title-container">
          <h2>{name || "Unnamed"}</h2>
          {showText ? <span>| {date}</span> : ""}
        </div>
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
  );
}
