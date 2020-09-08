import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CarouselComponent from "./carousel.js";
import Food from "./food.js";
import Places from "./places.js";
import Dresses from "./dresses.js";
import GuestList from "./guestList.js";
import CardInvitation from "./cardInvitation.js";
import WishList from "./wishlist.js";
import CardExample from "./weedingcard.js";
var email = localStorage.getItem("myEmail");
export default class HomePage extends Component {
  render() {
    return (
      <div className="homebody">
        <br />
        <CarouselComponent />
        <h4>Let's arrange your wedding </h4>
        <h4>
          "Walking with your hands in mine and mine in yours, that’s exactly
          where I want to be always."
        </h4>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:'#ffdf80'}}>
          <div className="container">
            <Link to={"/places"} className="navbar-brand">
              Places
            </Link>
            <Link to={"/dresses"} className="navbar-brand">
              Dresses
            </Link>
            <Link to={"/food"} className="navbar-brand">
              Food
            </Link>
            <Link to={"/cardInvitation"} className="navbar-brand">
              CardInvitation
            </Link>
            <Link to={"/guestList"} className="navbar-brand">
              GuestList
            </Link>
            <Link to={"/wishlist"} className="navbar-brand">
              WishList
            </Link>
            <Link to={"/logout"} className="navbar-brand">
              Logout
            </Link>
            <Link className="navbar-brand">
            {email}
            </Link>
           
          </div>
        </nav>
        ​
      </div>
    );
  }
}
