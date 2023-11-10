import React from 'react'
import './Rent.css'
import { Link } from 'react-router-dom'

export default function Rentpage() {
  return (
    <div>
      <style>{'body {background-color: #B3E4E5; }'}</style>
      <img src="https://us.123rf.com/450wm/praewpailin/praewpailin1809/praewpailin180900146/praewpailin180900146.jpg?ver=6" alt="Tina" width="1519" height="300"></img>
       
      <Link to="/FinalRent1">
      <img id="tinaimg1" src="https://cdn.homedit.com/wp-content/uploads/house-styles/Cape-Cod-Architecture-House-Style.jpg" alt="Tina" ></img>
      </Link>
      
      <Link to="/FinalRent2">
      <img id='tinaimg2' src="https://www.achahomes.com/wp-content/uploads/2017/12/Indian-Style-Inspired-House-Design-1.jpg" alt="Tina" ></img>
      </Link>
    
      <Link to="/FinalRent3">
      <img id="tinaimg3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_LB-busnPBTqKCBzoXDWC_c6TWQiNF7ZMg&usqp=CAU" alt="Tina" ></img>
      </Link>
      
      <Link to="/FinalRent4">
      <img id="tinaimg4" src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/05/27155733/2017_01_17_EXT_05_C2_AH-1-1.jpg" alt="Tina" ></img>
      </Link>
      
      <Link to="/FinalRent5">
      <img id="tinaimg5" src="https://dyimg2.realestateindia.com/prop_images/875758/511071_1.jpg" alt="Tina" ></img>
      </Link>
      
      <box id="tinaimg6"
      sx={{
        width:100,
        height:100,
        paddingTop:'5%',
        paddingLeft:'5%',
        BackgroundColor:'white','&:Hover':{BackgroundColor:'White'},
      }}>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQieXF-EXKauEh5Mpoksnc07gR3CWXfiRcVJQNcBsfA_F5VSW_V5bBsyWY5YK2Jdw5xBnY&usqp=CAU" alt="Tina" width="300" height="200"></img>
      </box>
      <box id="tinaimg7"
      sx={{
        width:100,
        height:100,
        paddingTop:'5%',
        paddingLeft:'5%',
        BackgroundColor:'white','&:Hover':{BackgroundColor:'White'},
      }}>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_f8LVG0Mbzevj0jKuPxNSexZJoAkKB8HTg&usqp=CAU" alt="Tina" width="300" height="200"></img>
      </box>
      <box id="tinaimg8"
      sx={{
        width:100,
        height:100,
        paddingTop:'5%',
        paddingLeft:'5%',
        BackgroundColor:'white','&:Hover':{BackgroundColor:'White'},
      }}>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rQL1GpY0Vd6nSmZ87jbDuw_HyK7zjp_GPA&usqp=CAU" alt="Tina" width="300" height="200"></img>
      </box>
      <box id="tinaimg9"
      sx={{
        width:100,
        height:100,
        paddingTop:'5%',
        paddingLeft:'5%',
        BackgroundColor:'white','&:Hover':{BackgroundColor:'White'},
      }}>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBEHik2ZJkr0VH_Nt380axcAyxv7BNRiXNA&usqp=CAU" alt="Tina" width="300" height="200"></img>
      </box>
      <h1 className="tinaheader">Looking for something to rent??</h1>
      <h3 className='tinaTitle'>For U From Us..</h3>
      <img className="tinaWish1" src="https://static.thenounproject.com/png/3551002-200.png" alt="WishList" width="3.5%" height="4%"></img>
      <img className="tinaWish2" src="https://static.thenounproject.com/png/3551002-200.png" alt="WishList" width="3.5%" height="4%"></img>
      <img className="tinaWish3" src="https://static.thenounproject.com/png/3551002-200.png" alt="WishList" width="3.5%" height="4%"></img>
      <img className="tinaWish4" src="https://static.thenounproject.com/png/3551002-200.png" alt="WishList" width="3.5%" height="4%"></img>
      <img className='tinaBell' src='https://cdn.dribbble.com/users/2287419/screenshots/15295450/media/c3fe7aed22fdffdd2cbd9a7d8bf6c4e8.gif' alt='Notification' width="4%" height="5.5%"></img>
      <Link to="/FilterPage">
      <h4 className='tinaButton'>Filters</h4>
      </Link>

      <p className='tinaDetail1'>Rs.30000 to 50000</p>
      <p className='tinaDetail2'>Vadavalli Coimbatore</p>
      <p className='tinaDetail3'>Rs.50000 to 70000</p>
      <p className='tinaDetail4'>Race Course Coimbatore</p>
      <p className='tinaDetail5'>Rs.70000 to 80000</p>
      <p className='tinaDetail6'>Avinashi Road Coimbatore</p>
      <p className='tinaDetail7'>Rs.30000 to 50000</p>
      <p className='tinaDetail8'>R.S Puram Coimbatore</p>
      <input type="search" id="tinaSearch" placeholder="Search by City,Locality,Project,Landmark..."></input>
      <Link to="/Home">
     <button class="tinaclose-button" aria-label="Close alert" type="button" data-close>
    <span aria-hidden="true">&times;</span>
  </button>
  </Link>
    </div>
  )
}