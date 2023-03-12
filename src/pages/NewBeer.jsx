import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewBeer = () => {
  const navigate = useNavigate();
  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleNewBeer = (e) => {
    console.log(e.target.value);
    setNewBeer((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const apiCall = async () => {
    const body = {
      name: newBeer.name,
      tagline: newBeer.tagline,
      description: newBeer.description,
      first_brewed: newBeer.first_brewed,
      brewers_tips: newBeer.brewers_tips,
      attenuation_level: parseInt(newBeer.attenuation_level), //.toFixed(2)
      contributed_by: newBeer.contributed_by,
    };
    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        body
      );
      navigate("/");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    apiCall();
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={newBeer.name}
          onChange={handleNewBeer}
          required
        />
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={newBeer.tagline}
          onChange={handleNewBeer}
          required
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={newBeer.description}
          onChange={handleNewBeer}
          required
        />
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={newBeer.first_brewed}
          onChange={handleNewBeer}
          required
        />
        <label>Brewers tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={newBeer.brewers_tips}
          onChange={handleNewBeer}
          required
        />
        <label>Attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          value={newBeer.attenuation_level}
          onChange={handleNewBeer}
          required
        />
        <label>Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          value={newBeer.contributed_by}
          onChange={handleNewBeer}
          required
        />
        <button type="submit">Create new beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
