import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default class CardInvitation extends Component {
  constructor(props) {
    super(props);

    this.onChangeBridename = this.onChangeBridename.bind(this);
    this.onChangeGroomname = this.onChangeGroomname.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeURL = this.onChangeURL.bind(this);

    this.state = {
      brideName: "",
      groomName: "",
      date: "",
      placeName: "",
      wishListUrl: "",
      groomId: "",
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
  onChangeURL(e) {
    this.setState({
      wishListUrl: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const card = {
      brideName: this.state.brideName,
      groomName: this.state.groomName,
      date: this.state.date,
      placeName: this.state.placeName,
      wishListUrl: this.state.wishListUrl,
      groomId: localStorage.getItem("id"),
    };
    localStorage.setItem("brideName", this.state.brideName);
    localStorage.setItem("groomName", this.state.groomName);
    localStorage.setItem("date", this.state.date);
    localStorage.setItem("placeName", this.state.placeName);
    console.log(card);
    //console.log(localStorage.getItem('id'))
    axios
      .post("http://localhost:5000/cardInvitation/", card)
      .then((res) => {
        console.log("card created successfuly!");
        // window.location = '/sign-in'
      })
      .catch(() => console.log("Creating card failed !"));
    //window.location = "/";
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/homepage">Home Page</Link>
          </li>
        </ul>
        <h3>Create Invitation Card</h3>
        <p>
          Now since we arranged everything for the wedding lets create the
          invitatin card so we can send it to you'r guests!{" "}
        </p>
        <h6>
          don't forget to make your wish list!
          <Link to="/wishlist">WishList</Link>
        </h6>
        <p>
          After you finish filling the form of the wish list <br />
          press on send button (it will appear a box press on the link button
          which is next to the message button,then shorten url & copy) <br />&
          finally Paste it here in the (Wish List Form URL){" "}
        </p>
        <div className="card">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Bride Name: </label>
              <input
                type="text"
                name="brideName"
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
                name="groomName"
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
                name="date"
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
                name="placeName"
                required
                className="form-control"
                value={this.state.placeName}
                onChange={this.onChangeLocation}
              />
            </div>
            <div className="form-group">
              <label>Wish List Form URL: </label>
              <input
                type="text"
                name="wishListUrl"
                required
                className="form-control"
                value={this.state.URL}
                onChange={this.onChangeURL}
              />
            </div>
            <div className="btn">
              <button type="submit" className="btn btn-primary btn-block">
                Create Wedding Card
              </button>
            </div>
            <ul>
              <li>
                <Link to="/card">View Wedding Card</Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
