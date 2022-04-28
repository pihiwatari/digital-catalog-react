import React from "react";
import CardData from "../cardData/CardData";
import "./ModelCard.css";

const ModelCard = () => {
  return (
    <div className="card">
      <div className="image-container">
        <img className="model-image" src="" alt="" />
      </div>
      <CardData />
    </div>
  );
};

export default ModelCard;
