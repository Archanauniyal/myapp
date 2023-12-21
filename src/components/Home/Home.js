import React from 'react'
import "../styles/Home.css"
import Navbar from '../Navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import Btech from '../Pages/Btech'

export const Home = () => {
  const navigate = useNavigate()
  const handleQualificationChange = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "B.TECH") {
      navigate("/btech");
    } else if (selectedValue === "B.COM") {
      navigate("/bcom");
    } else if (selectedValue === "BCA") {
      navigate("/bca");
    } else if (selectedValue === "B.A") {
      navigate("/ba");
    }
  };

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
   <select className='input' onChange={handleQualificationChange}>
   <option>Qualification</option>
    <option value="B.TECH">B.TECH </option>
    <option value="B.COM">B.COM</option>
    <option value="BCA">BCA</option>
    <option value="B.A">B.A</option>
   </select>
   </label>
  </form>
</div>
</div>
</>
  )
}


