import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "../components/BeerCard";
import { useNavigate } from "react-router-dom";

const SingleBeer = () => {
  const { beerId } = useParams();
  const [singleBeer, setSingleBeer] = useState({});
  const navigate = useNavigate();
  const apiCall = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setSingleBeer(response.data);
    } catch (error) {
      navigate("/error");
      console.log(error);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return <BeerCard singleBeer={singleBeer} />;
};

export default SingleBeer;
