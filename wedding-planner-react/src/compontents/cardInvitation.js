import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CardInvitation extends Component {
  constructor(props) {
    super(props);

    this.onChangeBridename = this.onChangeBridename.bind(this);
    this.onChangeGroomname = this.onChangeGroomname.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onCreatecard = this.onCreatecard.bind(this);

    this.state = {
      bridename: "",
      groomname: "",
      date: 0,
      location: "",
      users: [],
    };
  }

  componentDidMount() {
    this.setState({
      users: ["name"],
      bridename: "name",
      groomname: "name",
    });
  }

  onChangeBridename(e) {
    this.setState({
      bridename: e.target.value,
    });
  }

  onChangeGroomname(e) {
    this.setState({
      groomname: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onCreatecard(e) {
    e.preventDefault();
    const user = {
      bridename: this.state.bridename,
    };
    console.log(user);
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h1>Create Invitation Card</h1>
        <p>
          Now since we arranged everything for the wedding lets create the
          invitatin card so we can send it to you'r guests!{" "}
        </p>
        <br />
        <div className="card">
          <form onCreatecard={this.onCreatecard}>
            <div className="form-group">
              <label>Bride Name: </label>
              <select
                ref="userInput"
                required
                className="form-control"
                value={this.state.bridename}
                onChange={this.onChangeBridename}
              >
                {this.state.users.map(function (user) {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Groom Name: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.groomname}
                onChange={this.onChangeGroomname}
              />
            </div>
            <div className="form-group">
              <label>Date of wedding: </label>
              <input
                type="number"
                required
                className="form-control"
                value={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
            <div className="form-group">
              <label>Location of wedding: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.location}
                onChange={this.onChangeLocation}
              />
            </div>
            <div className="form-group">
              <input
                type="createcard"
                className="btn btn-primary"
                value="Create Wedding Card"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
