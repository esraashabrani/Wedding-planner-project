import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CardInvitation extends Component {
  constructor(props) {
    super(props);

    this.onChangeBridename = this.onChangeBridename.bind(this);
    this.onChangeGroomname = this.onChangeGroomname.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      brideName: "",
      groomName: "",
      date: "",
      placeName: "",
    };
  }

  componentDidMount() {}

  onChangeBridename(e) {
    this.setState({
      brideName: e.target.value,
    });
  }

  onChangeGroomname(e) {
    this.setState({
      groomName: e.target.value,
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value,
    });
  }

  onChangeLocation(e) {
    this.setState({
      placeName: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const card = {
      brideName: this.state.brideName,
      groomName:this.state.groomName,
      date :this.state.date,
      placeName :this.state.placeName

    };
    console.log(card);
    //window.location = "/";
  }

  render() {
    return (
      <div>
        <h1>Create Invitation Card</h1>
        <p>
          Now since we arranged everything for the wedding lets create the
          invitatin card so we can send it to you'r guests!
        </p>
        <br />
        <div className="card">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Bride Name: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.brideName}
                onChange={this.onChangeBridename}
              />
            </div>
            <div className="form-group">
              <label>Groom Name: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.groomName}
                onChange={this.onChangeGroomname}
              />
            </div>
            <div className="form-group">
              <label>Date of wedding: </label>
              <input
                type="text"
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
                value={this.state.placeName}
                onChange={this.onChangeLocation}
              />
            </div>
            <div className="btn">
              <button type="submit" className="btn btn-primary">
                Create Invetaion card
              </button>
              <p id="accoutCreated"></p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
