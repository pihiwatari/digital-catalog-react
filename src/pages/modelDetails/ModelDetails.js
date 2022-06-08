import React from "react";
import ModelDetailData from "../../layouts/modelDetailData/ModelDetailData";
import ModelDetailDisplay from "../../layouts/modelDetailDisplay/ModelDetailDisplay";
import { useParams } from "react-router-dom";
import apiData from "../../utils/mockupData";
import "./ModelDetails.css";

export default function ModelDetails() {
  const params = useParams();
  const model = apiData.filter((item) => item.id == params.id)[0];
  return (
    <main className="model-container">
      <ModelDetailDisplay
        name={model.name}
        date={model.uploadedOn}
        url={model.modelUrl}
      />
      <ModelDetailData price={model.price} specs={model.specs} />
    </main>
  );
}
