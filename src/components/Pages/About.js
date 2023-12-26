import React from "react";
import Navbar from "../Navbar/Navbar";
import "../styles/About.css"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="aboutmain">
        <div className="about">
          <h4>ABOUT US</h4>
          <h1>Get In Touch With US </h1>
          <p>
            A Contact us Page is essential for your site to eangage with visitor
            customer .<br></br>Check out thses helpuful tips and contact us page
            examples.
          </p>
          <h1>Our Locations </h1>
          <p>Bmc chowvk naera food mall </p>
          <h1>Phone Number</h1>
          <p>12348-2682 , 12356-789578</p>
          <h1>Email Address</h1>
          <p>archanauniyal1301@gmail.com</p>
        </div>
        <div className="aboutform">
          <form className="fromaboutt">
            <input className="aboutinput" type="text" placeholder="Your Name"></input>
            <input className="aboutinput" type="text"placeholder="Your Email"></input>
            <input className="aboutinput" type="text"placeholder="Your phone Number"></input>
            <input className="aboutinput1" type="text"placeholder="Your Message"></input>
          </form>
          <button className="aboutbtn">SUBMIT</button>

        </div>
      </div>
    </>
  );
};

export default About;
