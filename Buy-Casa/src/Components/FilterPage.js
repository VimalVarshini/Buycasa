import React from 'react'
import { Link } from 'react-router-dom';
import './FilterPage.css'

export default function FilterPage() {
  return (
    <div>
    <img id="vimvarbackground" src='https://us.123rf.com/450wm/praewpailin/praewpailin1809/praewpailin180900146/praewpailin180900146.jpg?ver=6' alt='Background'></img>
     <h1 className='varfilter'>Filter</h1>
     <Link to="/Buypage">
     <button type={"button"} value={"button"} id="varbuy">Buy</button>
     </Link>
     <Link to="/Rentpage">
     <button type={"button"} value={"button"} id="varsell">Sell</button>
     </Link>
     <h4 className='varlook'>Looking to:</h4>
     <h4 className='varpro'>Property Type :</h4>
     <button type={"button"} value={"button"} id="varp1">House</button>
     <button type={"button"} value={"button"} id="varp2">Apartment</button>
     <button type={"button"} value={"button"} id="varp3">Villas</button>
     <button type={"button"} value={"button"} id="varp4">Room</button>
     <h4 className='varPrice'>Pricing:</h4>
     <input type={"range"} id="varpri" />
     <h4 className='varBedRoom'>BedRooms :</h4>
     <button type={"button"} value={"button"} id="varbe1">1 BHK</button>
     <button type={"button"} value={"button"} id="varbe2">2 BHK</button>
     <button type={"button"} value={"button"} id="varbe3">3 BHK</button>
     
     <button type={"button"} value={"button"} id="varbe4"> >3 BHK</button>
     <Link to="/Home">
     <input type="reset" id="varreset"></input>
     </Link>
     <Link to="/Home">
     <button class="varclose-button" aria-label="Close alert" type="button" data-close>
    <span aria-hidden="true">&times;</span>
  </button>
  </Link>
    </div>
  )
}
