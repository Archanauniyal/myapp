import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../styles/Home.css"
import pic1 from "../Images/homeimage.jpg"
const Home = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div className='mainhomediv'>
      <div className='home'>
        <img src={pic1}></img>
      </div>
      <div className='hometext'>
        <h1>JOB GINIE</h1>
        <h2>FIND YOUR TYPE OF JOBS</h2>
      </div>
      <div className='homebutton'>
        <button>APPLY NOW</button>
        <div className='homebutton'><button>LEARN MORE</button></div>
        </div> 
      </div>
    
        </div>
       
    </>
  )
}

export default Home