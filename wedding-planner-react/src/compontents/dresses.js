import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dresses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dresses: [],
    };
  }

  componentDidMount() {
    const that = this;
    axios
      .get("http://localhost:5000/dresses/")
      .then((response) => {
        that.setState({ dresses: response.data });
        //console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const dress = this.state.dresses;

    return (
      <div>
        <section className="products">
          {dress.map(function (ele) {
            return (
              <div className="product-card">
                <div className="product-image">
                  <img src={ele.imageUrl} />
                </div>
                <div className="product-info">
                  <a>Name: {ele.name} </a><br/>
                  <a>Location:{ele.location}</a><br/>
                  <a> WebsiteUrl:</a> 
                  <a href={ele.websiteUrl}>click here</a><br/>
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
