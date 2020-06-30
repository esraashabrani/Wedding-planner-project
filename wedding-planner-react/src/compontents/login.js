import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange() {
    const target = target.target;
    const email = target.email;
    const password = target.password;
  }

  render() {
    return (
      <form className="sign">
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <br />
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <br />
          <label htmlFor="Password">Password</label>
          <br />
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="password"
            required
          />
        </div>
        <br />
        <div className="btn">
          <button
            type="submit"
            onClick={this.login}
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      </form>
    );
  }
}
