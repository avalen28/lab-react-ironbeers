import React from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBeers = () => {
  const [beers, setAllBeers] = useState([]);
  const ApiCall = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setAllBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ApiCall();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="all-container">
        {beers.map((elem) => {
          return (
            <Link
              to={`/beers/${elem._id}`}
              key={elem._id}
              className="beer-card"
            >
              <img src={elem.image_url} alt="beer" className="img-card" />
              <div className="card-info">
                <h2>{elem.name}</h2>
                <h3>{elem.tagline}</h3>
                <h4>{`Created by: ${elem.contributed_by.split("<")[0]}`}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AllBeers;
