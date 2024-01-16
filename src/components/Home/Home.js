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
          <p>Job Objective or Overall Purpose Statement -
             This statement is generally a summary designed to orient the reader to the general nature,<br></br>
              level, purpose and objective of the job. The summary should describe the broad function 
              and scope of the position and be no longer than three to four sentences.
              <br></br>Recruitment refers to the process of identifying, attracting, interviewing, selecting,
               hiring and onboarding employees.<br></br> 
              In other words, it involves everything from the identification of a staffing need to filling it.
          </p>
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
