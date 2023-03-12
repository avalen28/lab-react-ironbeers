import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleBeer = () => {
  const { beerId } = useParams();
  const [singleBeer, setSingleBeer] = useState({});
  const {
    name,
    image_url,
    attenuation_level,
    tagline,
    first_brewed,
    description,
    contributed_by,
  } = singleBeer;
  const apiCall = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );

      setSingleBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

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

export default SingleBeer;
