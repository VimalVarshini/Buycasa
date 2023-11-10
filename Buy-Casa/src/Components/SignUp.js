import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
  const[FullName,setFullName]=useState("");
  const[Email,setEmail]=useState("");
  const[username,setUsername]=useState("");
  const[pwd,setPassword]=useState("");
  const[cpwd,setconfirmpassword]=useState("");
    const navigate=useNavigate();
    const formHandler=(event)=>{ 
      event.preventDefault();
      if(username.length==0){
        alert("Enter UserName!")
      }
      else if(FullName.length==0){
        alert("Enter FullName!")
      }
      else if(Email.length==0){
        alert("Enter Email!")
      }
      else if(cpwd.length==0){
        alert("Enter Confirm Password!")
      }
      else if(pwd!=cpwd){
        alert("Enter Same Password")
      }
      else if(pwd.length==0){
        alert("Enter Password!")
      }
   else{
      navigate("/Home")
   }}
  
  return (
    <div>
    <img className='signpic'  src='https://i.pinimg.com/736x/38/6a/90/386a9072c0575d625e6f7c50da9f38aa.jpg' alt='sign'
    height={"90%"}></img><text-fieldset required>
    <div id='Allign'>
  <h1 style={{paddingLeft :"20%",paddingTop:"2%"}}>SIGN UP</h1>
  <div>
  <label  className='fullName' for="myInput"><h3>Full Name  :</h3></label>
  <input className='fullName1' required type="text" onChange={(e)=>setFullName(e.target.value)} />
  </div>
  <div>
  <label  className='Email' for="myInput"><h3>Email  :</h3></label>
  <input className='Email1' required type="text" onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div>
  <label  className='Username' for="myInput"><h3>Username :</h3></label>
  <input className='username1' required type="text" onChange={(e)=>setUsername(e.target.value)}/>
  </div>
  <div>
  <label  className='pwd' for="myInput"><h3>Password :</h3></label>
  <input className='pwd1' required type="password" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div>
  <label  className='cp' for="myInput"><h3>Confirm Password:</h3></label>
  <input className='cp1'required type="password" onChange={(e)=>setconfirmpassword(e.target.value)}/>
  </div>
  <button onClick={formHandler} className='signup' type="submit">Sign Up</button>
  <label  className='cb1' for="myInput"><h3>I agree to the Terms and Conditions</h3></label>
  <input  className='cb' required type="checkbox" />  
  </div>
  </text-fieldset>
    </div>
  )
}