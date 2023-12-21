import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../styles/Btech.css"
import pic1 from "../Images/graphic.jpg"
import pic2 from "../Images/fullstack.jpeg"
import pic3 from "../Images/front.jpg"
import pic4 from "../Images/software.jpg"
import pic5 from "../Images/tester.png"
import Footer from '../Footers/Footer'
const Btech = () => {
  return (
    <>
    <Navbar/>
    <div className='maindivbtech'>
      <div className='jobtype1'>
        <h1>Graphic Designer</h1>
        <img src={pic1}></img>
        <h3>Graphic designers use various design elements to create distinctive visuals for clients and companies. <br></br>
           A graphic designer can work with print or digital media, and <br>
        </br>they can create their designs by hand or using computer software.</h3>
        <h4>Salary :Average: ₹10,854 Range: ₹2,329 - ₹56,250</h4>
        <button className='button'>Apply Now</button>
      </div>
      <div className='jobtype1'>
        <h1>Full Stack Developer</h1>
        <img src={pic2}></img>
        <h3>A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. <br>
        </br>The front end (the parts of a website a user sees and interacts with) <br></br>
       and the back end (the behind-the-scenes data storage and processing) require different skill sets</h3>
        <h4>Salary :Average: ₹40,854 Range: ₹15,329 - ₹100,250</h4>
        <button className='button'>Apply Now</button>
      </div>
      <div className='jobtype1'>
        <h1>Frontend Developer</h1>
        <img src={pic3}></img>
        <h3>A front end developer is a developer or engineer who can build  the front end  of a website. <br>
        </br>The front end (the parts of a website a user sees and interacts with) <br></br>
       and the back end (the behind-the-scenes data storage and processing) require different skill sets</h3>
        <h4>Salary :Average: ₹20,854 Range: ₹15,329 - ₹70,250</h4>
        <button className='button'>Apply Now</button>
      </div>
      <div className='jobtype1'>
        <h1>Software Engineers</h1>
        <img src={pic4}></img>
        <h3>Software engineers apply engineering principles and knowledge of programming languages to build software solutions for end users. <br></br>
        Software engineers design and develop computer games, business applications, operating systems, <br></br>
        network control systems, and middleware—to name just a few of the many career paths available.</h3>
        <h4>Salary :Average: ₹20,854 Range: ₹15,329 - ₹70,250</h4>
        <button className='button'>Apply Now</button>
      </div>
      <div className='jobtype1'>
        <h1>Software Tester</h1>
        <img src={pic5}></img>
        <h3>Their role within an organization is to ensure the quality and reliability of a product to guarantee customer satisfaction.<br>
        </br> Software testers perform automated and manual tests to ensure that the <br></br>
        software operates as designed and that any bugs or issues are fixed..</h3>
        <h4>Salary :Average: ₹20,854 Range: ₹15,329 - ₹70,250</h4>
        <button className='button'>Apply Now</button>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Btech