import React from "react";
import ModelDetailData from "../../layouts/modelDetailData/ModelDetailData";
import ModelDetailDisplay from "../../layouts/modelDetailDisplay/ModelDetailDisplay";
import { useParams } from "react-router-dom";
import apiData from "../../db/db";
import "./ModelDetails.css";

export default function ModelDetails() {
  const params = useParams();
  const model = apiData.filter(
    (item) => parseInt(item.id) === parseInt(params.id)
  )[0];
  return (
    <main className="model-container">
      <ModelDetailDisplay
        name={model.name}
        date={model.uploadedOn}
        url={model.modelUrl}
      />
      <ModelDetailData
        name={model.name}
        url={model.modelUrl}
        price={model.price}
        specs={model.specs}
      />
    </main>
  );
}
