import React from "react";
import "./ModelSpec.css";

export default function ModelSpec({ spec, value, unit }) {
  return (
    <li className="specs-list__item">
      <p className="item__key">
        {spec.charAt(0).toUpperCase() + spec.slice(1)}
      </p>
      <p className="item__value">
        {value} {unit}
      </p>
    </li>
  );
}
