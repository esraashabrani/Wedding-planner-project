import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GuestList extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onAdd = this.onAdd.bind(this);

    this.state = {
      Email: "",
      guests: [],
    };
  }

  componentDidMount() {
    this.setState({
      guests: ["test Email"],
      Email: "Email",
    });
  }

  onChangeEmail(e) {
    this.setState({
      Email: e.target.value,
    });
  }

  onAdd(e) {
    e.preventDefault();

    const guest = {
      Email: this.state.Email,
    };
    console.log(guest);
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h1>guest List</h1>
        <div className="invit">
          <form onAdd={this.onAdd}>
            <div className="form-group">
              <label>Email address: </label>
              <select
                ref="guestInput"
                required
                className="form-control"
                value={this.state.Email}
                onChange={this.onChangeEmail}
              >
                {this.state.guests.map(function (guest) {
                  return (
                    <option key={guest} value={guest}>
                      {guest}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="form-group">
              <input
                type="Add"
                className="btn btn-primary"
                value="Add Guest Email"
              />
              <br />
            </div>
            <h3>
              You have shared the <br />
              same journey that we both had in life.
              <br />
              Without your presence,
              <br />
              the joy of this wedding is incomplete.
              <br />
              We are cordially inviting you <br />
              to be with us on our wedding day!
            </h3>
          </form>
        </div>
      </div>
    );
  }
}
