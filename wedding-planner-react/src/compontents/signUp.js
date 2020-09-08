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

    axios
      .post("http://localhost:5000/signup/", user)
      .then((res) => {
        document.getElementById("accoutCreated").innerText =
          "Account created Successfully! ";
        window.location = "/sign-in";
      })
      .catch(
        () =>
          (document.getElementById("accoutCreated").innerText =
            "The email is already exists! ")
      );

    //window.location = "/login"
  }
  render() {
    return (
      <body>
        <form onSubmit={this.onSubmit}>
          <h1>SignUp Form</h1>
          <div class="formcontainer">
            <hr />
            <div class="container">
              <label htmlFor="firstname">
                <strong> First Name</strong>
              </label>
              <input
                onChange={this.onChangefirstName}
                type="text"
                placeholder="Enter First Name"
                name="firstname"
                id="firstname"
                value={this.state.firstName}
                required
              />
              <label htmlFor="lastName">
                <strong>Last Name</strong>
              </label>
              <input
                onChange={this.onChangelastName}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                value={this.state.lastName}
                required
              />
              <label htmlFor="email">
                <strong> Email</strong>
              </label>
              <input
                onChange={this.onChangeemail}
                type="email"
                name="email"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={this.state.email}
                required
              />
              <label htmlFor="password">
                <strong> Password</strong>
              </label>
              <input
                onChange={this.onChangepassword}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={this.state.password}
                required
              />
            </div>
          </div>
          <div>
            <button type="submit" style={{margin: '10px 310px' ,width:'40%'}}>SignUp</button>
            <p id="accoutCreated"></p>
          </div>
        </form>
      </body>
    );
  }
}
