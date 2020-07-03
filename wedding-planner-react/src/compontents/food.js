import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
    };
  }

  componentDidMount() {
    const that = this;
    axios
      .get("http://localhost:5000/food/")
      .then((response) => {
        that.setState({ food: response.data });
        //console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    var catering = this.state.food;
    return (
      <div>
        <ul>
          <li>
            <Link to="/homepage">Home Page</Link>
          </li>
        </ul>
        <section className="products">
          {catering.map(function (ele) {
            return (
              <div className="product-card">
                <div className="product-image">
                  <img src={ele.imageUrl} />
                </div>
                <div className="product-info">
                  <a>Name: {ele.name} </a>
                  <br />
                  <a>Location:{ele.location}</a>
                  <br />
                  <a> WebsiteUrl:</a>
                  <a href={ele.websiteUrl} target="_blank">click here</a>
                  <br />
                  <a>Contact us:{ele.contact}</a>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
