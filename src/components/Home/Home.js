import React from "react";
import Navbar from "../Navbar/Navbar";
import "../styles/Home.css";
import pic1 from "../Images/homeimage.jpg";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mainhomediv">
        <div className="hometext">
          <h1>JOB GINIE</h1>
          <h2>FIND YOUR TYPE OF JOBS</h2>
          <button className="homebutton">APPLY NOW</button>
          <button className="homebutton">LEARN MORE</button>
        </div>
        <div className="home">
          <img src={pic1}></img>
        </div>
      </div>
    </>
  );
};

export default Home;
