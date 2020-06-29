import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: ""
          };
          
    
    }
    handleChange(){
        const target = target.target;
        const email = target.email;
        const password = target.password
        const firstName = target.firstName
        const lastName = target.lastName
      }

    render(){
        return(
              <form className="sign">
                   <div className="form-group">
                  <label htmlFor="name">First name</label><br />
                  <input onChange={this.handleChange} type="name" name="firstName" className="form-control" id="firstName"  placeholder="Enter first name" required/>
                </div>
                <div className="form-group"><br />
                  <label htmlFor="name">Last name</label><br />
                  <input onChange={this.handleChange} type="name" name="lastName" className="form-control" id="lastName" placeholder="Enter last name" required/>
                </div><br />

                <div className="form-group">
                  <label htmlFor="email">Email address</label><br />
                  <input onChange={this.handleChange} type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                </div>
                <div className="form-group"><br />
                  <label htmlFor="password">Password</label><br />
                  <input onChange={this.handleChange} type="password" name="password" className="form-control" id="password" placeholder="Password" required/>
                </div><br />
               <div className="btn">
                <button type="submit" onClick={this.SignUp} className="btn btn-primary">Submit</button>
              </div>
              </form>
        )
    }
}
