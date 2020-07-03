import ReactDom from "react-dom";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
var groomName = localStorage.getItem("groomName");
var brideName = localStorage.getItem("brideName");
var date = localStorage.getItem("date");
var placeName = localStorage.getItem("placeName");
const CardExample = () => {
  console.log(date);
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div>
      <ul>
        <li>
          <Link to="/homepage">Home Page</Link>
        </li>
      </ul>
      <div>
        <MDBCol>
          <MDBCard style={{ width: "40rem" }}>
            <MDBCardImage className="img-fluid" src="../image17.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>Wedding Card Invitation</MDBCardTitle>
              <MDBCardText>
                {brideName} and {groomName} <br />
                ​ invite you to share and celebrate their wedding day
                <br />​ Date : {date}
                <br />
                ​ At : 7:00 PM
                <br />
                In : {placeName}
                <br />​
              </MDBCardText>
              <MDBBtn href="#">We Wil Be Happy To Have You With Us</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        ​
      </div>
      ​
      <div style={{ height: 70, width: 80, justifyContent: "center" }}>
        <MDBCol>
          <MDBCard style={{ width: "40rem" }}>
            <MDBCardImage className="img-fluid" src="../card3.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>Wedding Invitation</MDBCardTitle>
              <MDBCardText>Make sure to come!</MDBCardText>
              <MDBBtn href="#">Children paradise is there home..</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    </div>
  );
};
export default CardExample;
