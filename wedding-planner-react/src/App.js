import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.css";

import HomePage from "./compontents/homePage.js";
import Dresses from "./compontents/dresses.js";
import Food from "./compontents/food.js";
import Places from "./compontents/places.js";
import Navbar from "./compontents/navbar.js";
import GuestList from "./compontents/guestList.js";
import CardInvitation from "./compontents/cardInvitation.js";
import LoginFacebook from "./compontents/facebook.js";
import Login from "./compontents/login.js";
import SignUp from "./compontents/signUp.js";

function App() {
  return (
    <div className='App'>
      <facebook />
      
            <Router>
              <Navbar />
              <br/>
              <Route path="/homepage" component={HomePage} />
              <br/>
              <Route path="/food" component={Food} />
              <br/>
              <Route path="/dresses" component={Dresses} />
              <br/>
              <Route path="/places" component={Places} />
              <br/>
              <Route path="/guestList" component={GuestList} />
              <br/>
              <Route path="/cardInvitation"  component={CardInvitation} />
              <br/>
              <Route path="/signUp" component={SignUp} />
              <br/>
              <Route path="/login" component={Login} />
              <br/>
              <Route path="/facebookLogin" component={LoginFacebook} />
            </Router>
       </div>
  );
}

export default App;
