import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BeerCard from "../components/BeerCard";

const RandomBeer = () => {
  const [singleBeer, setSingleBeer] = useState({});
  const apiCall = async () => {
    try {
      const response = await axios.get(
        ` https://ih-beers-api2.herokuapp.com/beers/random`
      );
      setSingleBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);

  return <BeerCard singleBeer={singleBeer} />;
};

export default RandomBeer;
