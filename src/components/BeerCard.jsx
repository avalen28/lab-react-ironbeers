import React from "react";
import Navbar from "./Navbar";

const BeerCard = ({ singleBeer }) => {
  const {
    name,
    image_url,
    attenuation_level,
    tagline,
    first_brewed,
    description,
    contributed_by,
  } = singleBeer;
  return (
    <div className="single-beer-page">
      <Navbar />
      <div className="single-beer-card">
        <img src={image_url} alt="single beer" />
        <div className="block-card">
          <h3>{name}</h3>
          <h3 className="attenuation">{attenuation_level}</h3>
        </div>
        <div className="block-card">
          <h3>{tagline}</h3>
          <h3>{first_brewed}</h3>
        </div>
        <h4>{description}</h4>
        <h3>{contributed_by}</h3>
      </div>
    </div>
  );
};

export default BeerCard;
