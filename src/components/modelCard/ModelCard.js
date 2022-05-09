import React from "react";
import CardData from "../cardData/CardData";
import { Link } from "react-router-dom";
import "./ModelCard.css";

const ModelCard = () => {
  return (
    <Link to="card">
      <article className="card">
        <figure className="image-container">
          <img className="model-image" src="" alt="" />
        </figure>
        <CardData />
      </article>
    </Link>
  );
};

export default ModelCard;
