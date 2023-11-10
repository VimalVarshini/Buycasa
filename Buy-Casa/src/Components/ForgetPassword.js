import React, { useState } from 'react'
import './ForgetPassword.css'
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
   const[PhoneNumber,setPhoneNumber]=useState("");
   const[OTP,setOTP]=useState("");
   const[pwd,setPassword]=useState("");
   const[cpwd,setcpwd]=useState("");
   const navigate=useNavigate();
   const formHandler=(event)=>{ 
     event.preventDefault();
     if(PhoneNumber.length==0){
       alert("Enter Phone Number!")
     }
     else if(OTP.length==0){
       alert("Enter OTP!")
     }
     else if(pwd.length==0){
       alert("Enter Password!")
     }
     else if(cpwd.length==0){
       alert("Enter Confirm Password!")
     }
     else if(pwd!=cpwd){
       alert("Enter Same Password!")
     }
     
  else{
     navigate("/")
  }}
    return (
      <div>
      <img id='vim1' src='https://www.businessload.com/wp-content/uploads/2018/02/How-to-Start-Your-Own-Real-Estate-Company.jpg' alt="house" ></img>
      <img id='vim2' src='https://us.123rf.com/450wm/praewpailin/praewpailin1809/praewpailin180900146/praewpailin180900146.jpg?ver=6' alt="backimage" ></img>
      <img id='vim3' src="data:image/jpeg;base64,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" alt='exclamation'></img>
      <div>
      <label  className='vi1' for="myInput"><h3>Phone Number :</h3></label>
      <input id="v1" type="text" onChange={(e)=>setPhoneNumber(e.target.value)}/>
      </div>
      <button type='Submit' form='F1' value={"Submit"} id={"vim"}>Send OTP</button>
      <div>
      <label  className='vi2' for="myInput"><h3>Enter OTP :</h3></label>
      <input id="v2" type="text" onChange={(e)=>setOTP(e.target.value)}/>
      </div>
      <div>
      <label  className='vi3' for="myInput"><h3>New Password :</h3></label>
      <input id="v3" type="password" onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div>
      <label  className='vi4' for="myInput"><h3>Confirm Password :</h3></label>
      <input id="v4" type="password" onChange={(e)=>setcpwd(e.target.value)}/>
      </div>
        <button onClick={formHandler} type='Submit' value={"Submit"} id="vimal"><strong>Submit</strong></button>
      </div>
    )
}
