import React from 'react'
import './Buy.css' 
import { Link } from 'react-router-dom';

export default function Buypage() {
  return (
    <div className="Buypage">
      <style>{'body { background-color: #B3E4E5; }'}</style>
      <img src="https://us.123rf.com/450wm/praewpailin/praewpailin1809/praewpailin180900146/praewpailin180900146.jpg?ver=6" alt="Sam" width="1519" height="300"></img>
        
        <Link to="/FinalBuy1">
        <img id='sam1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WTAKWv5aKb1fAf1CKlp93jqrzLaLqTQJ5A&usqp=CAU' alt='sam'/>
        </Link>

        <Link to="/Overall2">
        <img id='sam2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3i1jpJLXqxV-RpdvAe0yT2l-NdXgpq8UBCQ&usqp=CAU' alt='sam'/>
        </Link>
        
        <Link to="/Overall3">
        <img id='sam3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaPKd_RNaLzOBxnUbKDryg_txfUNzIVywtw&usqp=CAU' alt='sam' />
        </Link>
      
        <Link to="/Overall4">
        <img id='sam4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99g4SpDuapcM3ei7ssx6LAhTM6kpbcm-H2Q&usqp=CAU' alt='sam'/>
        </Link>
      
        <Link to="/Overall5">
        <img id='sam5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0WgQzEXkPOMzhk0h0ZVrErikZDOu9FtH6hQ&usqp=CAU' alt='sam' />
        </Link>
        
        <img className='sam6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2njUrZHbIk9o3VYnjBDWyJV1trKjpMVoF3g&usqp=CAU' alt='sam' width="300" height="200"/>
     
        <img className='sam7' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0P5erL4CM-MgsWo1ZSeucL-wzsAl2KyOcw&usqp=CAU' alt='sam' width="300" height="200"/>
      
        <img className='sam8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbCb1KOvkdWY6rcb8KYHkLI-TjmXYiTeiWw&usqp=CAU' alt='sam' width="300" height="200"/>
      
        <img className='sam9' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk0P5erL4CM-MgsWo1ZSeucL-wzsAl2KyOcw&usqp=CAU' alt='sam' width="300" height="200"/>
      
      <img id='samWish1' src="https://www.fusionkitchen.co.uk/public/images/fav-heart.gif" alt='WishList' width="3.5%" height="4%"></img>
      <img id='samWish2' src="https://www.fusionkitchen.co.uk/public/images/fav-heart.gif" alt='WishList' width="3.5%" height="4%"></img>
      <img id='samWish3' src="https://www.fusionkitchen.co.uk/public/images/fav-heart.gif" alt='WishList' width="3.5%" height="4%"></img>
      <img id='samWish4' src="https://www.fusionkitchen.co.uk/public/images/fav-heart.gif" alt='WishList' width="3.5%" height="4%"></img>
      <img className='samBell' src="https://cdn.dribbble.com/users/2287419/screenshots/15295450/media/c3fe7aed22fdffdd2cbd9a7d8bf6c4e8.gif" alt="Notification" width="4%" height="5.5%"></img>
      
      <Link to="/FilterPage">
      <h4 className='samButton'>Filters</h4>
      </Link>
      
      <h4 className="samHeader">What are you looking for?</h4>
      <h4 className='samTitle'>Highlight Projects</h4>
      <p id='samDetail1'>Rs.2.22 to 4 croces </p>
      <p id='samDetail2'>Figma Ellam Chennai Central</p>
      <p id='samDetail3'>Rs.4.44 to 8 croces  </p>
      <p id='samDetail4'>East Coast Ellam Chennai North</p>
      <p id='samDetail5'>Rs.5.6 to 8 croces  </p>
      <p id='samDetail6'>Thagadurai Ellam Chennai Main</p>
      <p id='samDetail7'>Rs.6 to 9 croces  </p>
      <p id='samDetail8'>Kirshna Ellam Chennai Main</p>
      <input type="search" id="samSearch" placeholder='Search by Cities,Landmark,Projects..' ></input>
      <Link to="/Home">
     <button class="samclose-button" aria-label="Close alert" type="button" data-close>
    <span aria-hidden="true">&times;</span>
  </button>
  </Link>
    </div>
  )
} 