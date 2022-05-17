import React from "react";
import "./CardData.css";

const CardData = (props) => {
  return (
    <div className="data-container">
      <img className="avatar-image" src="" alt="" />
      <p className="model-description">3D model display name and more text</p>
      <strong className="model-price">$00.00</strong>
    </div>
  );
};

export default CardData;
