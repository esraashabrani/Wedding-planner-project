import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onSubmit(e){
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);

    axios.post('http://localhost:5000/login', user)
      .then(res => {
        if (res.data === 'That email not exists!'){
          document.getElementById('loginResult').innerText = "Login Failed! The email not exists! "
        }
        if(res.data === true){
          document.getElementById('loginResult').innerText = "Login Successed! "
          //window.location = '/places'
        } else if (res.data === false){
          document.getElementById('loginResult').innerText = "Login Failed! Wrong password! "
          
        }
        
        console.log(res.data)
      })
      .catch(() =>console.log("Error Occured!"))

  }

  render() {
    return (
      <form className="sign" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <br />
          <input
            onChange={this.onChangeemail}
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={this.state.email}
            required
          />
        </div>
        <div className="form-group">
          <br />
          <label htmlFor="Password">Password</label>
          <br />
          <input
            onChange={this.onChangepassword}
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="password"
            value={this.state.password}
            required
          />
        </div>
        <br />
        <div className="btn">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p id="loginResult"></p>
        </div>
      </form>
    );
  }
}
