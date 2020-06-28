import React from "react";
import $ from "jquery";
import "../style.css";

function HomePage() {
  return (
    <div>
      <img
        src="https://www.dkphoto.ie/wp-content/uploads/2017/12/Wedding-photographers-Sligo-1.jpg"
        className="imageStyle"
      />

      <h2 className="homeHeader">Let's arrange your wedding </h2>
      <br />
      <p className="homeText">
        "Walking with your hands in mine and mine in yours, that’s exactly where
        I want to be always."
      </p>
      <button>Join now</button>

      <button> Log in</button>
    </div>
  );
}

export default HomePage;
