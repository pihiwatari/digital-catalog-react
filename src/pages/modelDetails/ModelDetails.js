import React from "react";
import ModelDetailData from "../../layouts/modelDetailData/ModelDetailData";
import ModelDetailDisplay from "../../layouts/modelDetailDisplay/ModelDetailDisplay";
import "./ModelDetails.css";

export default function ModelDetails({ name, price, x, y, z, volume }) {
  return (
    <main className="model-container">
      <ModelDetailDisplay name={name} x={x} y={y} z={z} volume={volume} />
      <ModelDetailData price={price} />
    </main>
  );
}
