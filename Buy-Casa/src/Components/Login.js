import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'


export default function LoginPage() {
  const NavMyPage=()=>{
    navigate('/Home')
  }
  const NavSignUp=()=>
  {
    navigate('/SignUp')
  }
  const NavForgot=()=>
  {
    navigate('/ForgetPassword')
  }
  const[username,setUsername]=useState("");
    const[pwd,setPassword]=useState("");
    const navigate=useNavigate();
    const formHandler=(event)=>{ 
      event.preventDefault();
      if(username.length==0){
        alert("Enter Phone/email!")
      }
      else if(pwd.length==0){
        alert("Enter Password!")
      }
   else{
      navigate("/Home")
   }}
  return (
    <div>
    <img src="https://t3.ftcdn.net/jpg/02/13/15/64/360_F_213156467_sO7JHxCuNWQnUOIBnQJHNOVsBY07a57I.webp" alt="bg" width="1530" height="400" ></img>
    <img  className='prilogo' src='https://www.creativefabrica.com/wp-content/uploads/2021/07/25/Real-Estate-Building-Construction-logo-Graphics-15107023-1-580x387.jpg' alt='logo'></img>
    <h1 className='priapp'><b>BUY CASA</b></h1>
    <img className='prilogin' src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' alt='login'></img>
    
    <label className='priph' for="myInput"><h3>Phone/Email :</h3></label>
<input className='priphone' type="text" onChange={(e)=>setUsername(e.target.value)} />
  
<label  className='pripsd' for="myInput"><h3>Password   :</h3></label>
<input className='pripwd'  type="password" onChange={(e)=>setPassword(e.target.value)} />

<h3 onClick={formHandler} className='pricont'>Continue</h3>

<h3 onClick={NavForgot} className='priforgot'>Forgot Password?</h3>

<h3 className='prinew' ><b>New to Buy Casa : </b></h3>
<h3 onClick={NavSignUp} className='prisign'>Sign Up!</h3>  
     </div> 
  )
}