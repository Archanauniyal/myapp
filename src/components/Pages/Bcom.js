import React from 'react'
import Navbar from '../Navbar/Navbar'
import "../styles/Bcom.css"
import pic1 from "../Images/account.jpg"

const Bcom = () => {
  return (
    <>
    <Navbar/>
    <div className='maindivbcom'>
      <h1>Assistant Accounts</h1>
      <div className='bcomjob1'>
      <img src={pic1}></img>
      <p>Accounts assistants supply administrative support to accountants by performing clerical tasks such as filing,<br></br>
       handling mail, making phone calls, replying to emails and basic bookkeeping.</p>
        <div><button className='button3'>Submit</button></div>
       </div>
       <div className='bcomjpob'>
       </div>
    </div>
    </>
  )
}

export default Bcom