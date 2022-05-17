import React from "react";
import "./CardData.css";
import user from "../../images/usuario.png";

const CardData = ({ userImage, modelName, modelPrice }) => {
  return (
    <div className="data-container">
      <img className="avatar-image" src={userImage || user} alt="User" />
      <p className="model-description">{modelName || "Unnamed"}</p>
      <strong className="model-price">$ {modelPrice || "00.00"}</strong>
    </div>
  );
};

export default CardData;
