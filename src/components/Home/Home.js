import React from 'react'
import "../styles/Home.css"
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import Btech from '../Pages/Btech'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate()
  const btech = () => {
    console.log("arcgn")
navigate("/btech")
  }
  return (
<>
<Navbar/>
<div className='topdiv'>
  <h1>JOB GENIE !<br></br>
    Find Your Types of Jobs.
 </h1>
<div className='maindiv'>
  <div className='text'>FILL THIS FORM</div>
  <form className='form'>
    <label>
   <input className='input' type='text' placeholder='Enter the name'></input>
   </label>
   <label>
   <input className='input' type='text'placeholder='Enter your email'></input>
   </label>
   <label>
   <input className='input' type='text'placeholder='Enter phone number'></input>
   </label>
   <label>
   <input className='input' type='text'placeholder='Enter your address'></input>
   </label>
   <label>
   <input  className='input' type='text'placeholder=' Enter your city'></input>
   </label>
   <label>
   <input  className='input' type='text'placeholder=' Enter your state'></input>
   </label>
   <label>
   <select className='input' >
    <option>job experince</option>
    <option>2 Years</option>
    <option> More Than 3 Years</option>
    <option>NO</option>
   </select>
   </label>
   <label>
   <select className='input'>
   <option>Qualification</option>

    <option onClick={btech}>B.TECH</option>
    {/* <option onclick={bcom}>B.COM</option>
    <option onclick={bca}>BCA</option>
    <option onclick={ba}>B.A</option> */}
   </select>
   </label>
  </form>
</div>
</div>
</>
  )
}


