import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangefirstName = this.onChangefirstName.bind(this);
    this.onChangelastName = this.onChangelastName.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    };
  }
  onChangefirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangelastName(e) {
    this.setState({
      lastName: e.target.value,
    });
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
  onSubmit(e) {
    e.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(user);

    axios.post('http://localhost:5000/signup/', user)
      .then(res => {
        document.getElementById('accoutCreated').innerText = "Account created Successfully! "
        window.location = '/login'
      })
      .catch(() =>document.getElementById('accoutCreated').innerText = "The email is already exists! ")

      //window.location = "/login" 

    
  }
  render() {
    return (
      <form className="sign" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="name">First name</label>
          <br />
          <input
            onChange={this.onChangefirstName}
            type="name"
            name="firstName"
            className="form-control"
            id="firstName"
            placeholder="Enter first name"
            value={this.state.firstName}
            required
          />
        </div>
        <div className="form-group">
          <br />
          <label htmlFor="name">Last name</label>
          <br />
          <input
            onChange={this.onChangelastName}
            type="name"
            name="lastName"
            className="form-control"
            id="lastName"
            placeholder="Enter last name"
            value={this.state.lastName}
            required
          />
        </div>
        <br />

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
          <label htmlFor="password">Password</label>
          <br />
          <input
            onChange={this.onChangepassword}
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={this.state.password}
            required
          />
        </div>
        <br />
        <div className="btn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p id="accoutCreated"></p>
        </div>
      </form>
    );
  }
}
