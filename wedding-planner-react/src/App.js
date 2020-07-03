import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CaroComponent from "./compontents/caro.js";
import WeddingPlanner from "./compontents/weddingPlanner.js"
import Food from "./compontents/food.js";
import Places from "./compontents/places.js";
import Dresses from "./compontents/dresses.js";
import GuestList from "./compontents/guestList.js";
import CardInvitation from "./compontents/cardInvitation.js";
import WishList from "./compontents/wishlist.js";
import CardExample from "./compontents/weedingcard.js";
import Login from "./compontents/login.js";
import SignUp from "./compontents/signUp.js";
import LoginFacebook from "./compontents/facebook.js";
import HomePage from "./compontents/homePage.js";
import Logout from "./compontents/logout.js"
function App() {
  return (
    <div>
            
​
            <div className="auth-inner">
          <Switch>  
            <Route path="/card" component={CardExample} />
            <Route path="/wishlist" component={WishList} />
            <Route path = "/homePage" component={HomePage} />
            <Route exact path='/start' component={WeddingPlanner} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/facebookLogin" component={LoginFacebook} />
            <Route path="/food" component={Food} />
            <Route path="/dresses" component={Dresses} />
            <Route path="/places" component={Places} />  
            <Route path="/guestList" component={GuestList} />
            <Route path="/cardInvitation"  component={CardInvitation} />
            <Route path="/logout"  component={Logout} />
          </Switch>
        </div>
            </div>
  );
}
export default App;