import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class GuestList extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      guestEmail: "",
    };
  }
  componentDidMount() {}
  onChangeEmail(e) {
    this.setState({
      guestEmail: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const guest = {
      id: localStorage.getItem("id"),
      guestEmail: this.state.guestEmail,
    };
    console.log(guest);
    axios
      .post("http://localhost:5000/signup/update", guest)
      .then((res) => {
        console.log("guest added successfuly!");
        // window.location = '/sign-in'
      })
      .catch(() => console.log("Adding guest failed !"));
    //window.location = '/';
  }
  render() {
    return (
      <div className="guest">
        <ul>
          <li>
            <Link to="/homepage">Home Page</Link>
          </li>
        </ul>
        <h1>Guest List</h1>
        <p>
          {" "}
          Enter the email of each guest so we can send them the invitation card!
        </p>
        <div className="invit">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Email address: </label>
              <input
                type="text"
                name="guestEmail"
                required
                className="form-control"
                value={this.state.guestEmail}
                onChange={this.onChangeEmail}
              />
            </div>
            ​
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary"
                value="Add Guest Email"
              />
              <br />
              <img src="../imageguest.jpg" />
            </div>
            ​
          </form>
        </div>
      </div>
    );
  }
}
