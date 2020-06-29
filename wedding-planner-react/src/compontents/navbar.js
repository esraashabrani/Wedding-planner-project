import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 export default class Navbar extends Component {
	
	render() {
		return (
			<nav className="navbar justify-content-between w-100">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav " >
              <li className="navbar-item">
			        <Link to="/homepage" className="navbar-Link">Home page</Link>
              </li>
              <li className="navbar-item">
              <Link to="/places" className="nav-Link">Places</Link>
              </li>
              <li className="navbar-item">
              <Link to="/dresses" className="nav-Link">Dresses</Link>
              </li>
              <li className="navbar-item">
              <Link to="/food" className="nav-Link">Food</Link>
              </li>
              <li className="navbar-item">
              <Link to="/guestList" className="nav-Link">GuestList</Link>
              </li>
              <li className="navbar-item">
              <Link to="/cardInvitation" className="nav-Link">CardInvitation</Link>
			        </li>
              <ul nav-left>
			        <li className="navbar-item">
              <Link to="/signup" class="nav-Link">SignUp</Link>
              </li>
              <li className="navbar-item">
              <Link to="/login" class="nav-Link">Login</Link>
              </li>
			         <li className="navbar-item">
              <Link to="/facebookLogin" className="nav-Link">FacebookLogin</Link>
			  </li>
        </ul>
			  </ul>
			  </div>
        </nav>
			 
			);
	}
}


