import React from "react";
import ModelDetailData from "../modelDetailData/ModelDetailData";
import ModelDetailDisplay from "../modelDetailDisplay/ModelDetailDisplay";
import "./ModelDetails.css";

export default function ModelDetails() {
  return (
    <main className="model-container">
      <ModelDetailDisplay />
      <ModelDetailData />
    </main>
  );
}
