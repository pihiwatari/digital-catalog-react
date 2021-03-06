import React from "react";
import CardData from "../../components/cardData/CardData";
import { Link } from "react-router-dom";
import "./ModelCard.css";

const ModelCard = ({ id, modelImage, avatar, name, price }) => {
  return (
    <Link to={"3DModels/" + id}>
      <article className="card">
        <figure className="image-container">
          <img className="model-image" src={modelImage} alt={name} />
        </figure>
        <CardData userImage={avatar} modelName={name} modelPrice={price} />
      </article>
    </Link>
  );
};

export default ModelCard;
