import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img
              src="https://www.dkphoto.ie/wp-content/uploads/2017/12/Wedding-photographers-Sligo-1.jpg"
              alt="..."
            />
            <div className="carousel-caption">
              <h2>Arrange Your wedding With US</h2>
            </div>
          </div>
          <div className="item">
            <img
              src="https://www.innsbrook-resort.com/images/uploads/slider/Wedding-Slider1-1600x565.jpg?1593043200236"
              alt="..."
            />
            <div className="carousel-caption">
              <h2>
                We will help you to get happy Marrage by making things easier!
              </h2>
            </div>
          </div>
          <div className="item">
            <img
              src="https://www.wedaways.com/wp-content/uploads/2018/06/cake-cutting-italian-small.jpeg"
              alt="..."
            />
            <div className="carousel-caption">
              <h2>Trust US!</h2>
            </div>
          </div>
          <div className="item">
            <img
              src="https://images.squarespace-cdn.com/content/540f1d68e4b059d633f37e8c/1515154727478-UCLGSFXSVUBPV6JV83I8/a%2Bs_temple_house_sligo_wedding_livia_figueiredo_591.jpg?format=2500w&content-type=image%2Fjpeg"
              alt="..."
            />
            <div className="carousel-caption">
              <h2>Best Day Ever!</h2>
            </div>
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>

        <div>
          <h1 className="homeHeader">Let's arrange your wedding </h1>
          <br />
          <p className="homeText">
            "Walking with your hands in mine and mine in yours, that’s exactly
            where I want to be always."
          </p>
          <button>Join now</button>

          <button> Log in</button>
        </div>
      </div>
    );
  }
}
