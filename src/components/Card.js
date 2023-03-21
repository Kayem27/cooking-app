import React from "react";

const Card = ({ recette }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={recette.strMealThumb}
        className="card-img-top"
        alt={recette.strMeal}
      />
      <div className="card-body">
        <h5 className="card-title">{recette.strMeal}</h5>
        <h6>Origine: {recette.strArea}</h6>
        <p className="card-text">{recette.strInstructions}</p>
        <a
          href={recette.strYoutube}
          target="_blank"
          className="btn btn-primary yt"
        >
          Allez voir sur Youtube
        </a>
      </div>
    </div>
  );
};

export default Card;
