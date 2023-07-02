import React from "react";
import { Link } from "react-router-dom";
import Wallpaper from "../assets/home.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Wallpaper})` }}>
      <div className="headerContainer">
        <h1> Kaceej Cake Shop </h1>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
