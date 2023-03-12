import React from "react";
import { Link } from "react-router-dom";
import allBeers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randonBeer from "../assets/random-beer.png";

const Home = () => {
  return (
    <div>
      <h1>Hello there</h1>
      <div className="container">
        <Link to="/beers" className="section-card">
          <img src={allBeers} alt="all beers" />
          <h3>All beers</h3>
          <h4>
            We're no strangers to love You know the rules and so do I (do I) A
            full commitment's what I'm thinking of You wouldn't get this from
            any other guy I just wanna tell you how I'm feeling Gotta make you
            understand
          </h4>
        </Link>
        <Link to="/random-beer" className="section-card">
          <img src={randonBeer} alt="random-beer" />
          <h3>Random beer</h3>
          <h4>
            Never gonna give you up Never gonna let you down Never gonna run
            around and desert you Never gonna make you cry Never gonna say
            goodbye Never gonna tell a lie and hurt you
          </h4>
        </Link>
        <Link to="/new-beer" className="section-card">
          <img src={newBeer} alt="new-beer" />
          <h3>New beer</h3>
          <h4>
            We've known each other for so long Your heart's been aching, but
            you're too shy to say it (say it) Inside, we both know what's been
            going on (going on) We know the game and we're gonna play it
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Home;
