import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CaroComponent from "./caro.js";
export default class WeddingPlanner extends Component {
	render(){
		return (
            <div>
            <CaroComponent /> 
           <h2> Welcome To Our Application!</h2>
           <h6>we designed this site to make preparations easier on the grooms</h6>
           <p>Be happy,relax,comfotable and have Fun!</p>
           <p>Sign in first & lets start arrange your wedding togther </p>
           <ul>
            <li><Link to="/sign-up">Sign up</Link></li>
            </ul>
            <ul>
            <li><Link to="/sign-in">Login</Link></li>
            </ul>
            <ul>
            <li><Link to="/facebookLogin">Facebook-Login</Link></li>
            </ul>
           
            </div>
			)
	}
}