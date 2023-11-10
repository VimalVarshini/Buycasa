import React from 'react';
import './Home.css';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import BottomBar from './BottomBar';

export default function MyPage() {
   const navigate=useNavigate();
   const NavBuy=()=>
   {
      navigate('/BuyPage')
   }
   const NavRent=()=>
   {
     navigate('/RentPage')
   }

  return (
      <div>
      <NavBar></NavBar>
    <img className="mobg" src="https://media.istockphoto.com/id/1192403701/photo/residential-housing-background.jpg?b=1&s=170667a&w=0&k=20&c=ZnB0RLoK405JccizKC2xCWAn9tqRL1WEtFpMSCKeHGI=" alt="house"></img>
    <h2 onClick ={NavBuy} className='mobuy'><i><Link to="/BuyPage">Buy</Link></i></h2>
    <img onClick={NavRent} className='moimg1' src='https://cdn-icons-png.flaticon.com/512/602/602320.png' alt="rent" height={"7%"} width={"4%"}></img>
    <img onClick={NavBuy} className='moimg2' src='https://cdn-icons-png.flaticon.com/512/948/948758.png' alt='buy' height={"8%"} width={"5%"}></img>
    <button>
    </button>
    <h1 className="moapp"><b>Buy Casa</b></h1>
    <h3 className="moquo"><i>Key to your new Home</i></h3>
    <div className="morectangle" />
    <h2 className='moquot'>Right place for your property</h2>
    <h2 onClick ={NavBuy} className='morent'><i><Link to="/RentPage">Rent</Link></i></h2>
    <div className='moBottombar'>
    <div className='moBot'>
    <BottomBar></BottomBar>
    </div>
    </div>
    </div>
  )
}