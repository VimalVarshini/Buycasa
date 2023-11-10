  import React from 'react';
  import "./FinalBuy1.css";
  import { Link } from 'react-router-dom';

  export default function Buyandsell() {
    return (
      <div>
      <img id="vimbg1" src="data:image/jpeg;base64,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" alt="background1">
      </img>
      <img id="vimbg2" src="data:image/jpeg;base64,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" alt="background2">
      </img>
      <h2 className='vimHigh'>Highlight Projects-Vanilla Ellam</h2>

      <img id="vimHouse" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7WTAKWv5aKb1fAf1CKlp93jqrzLaLqTQJ5A&usqp=CAU" alt="House"></img>
      <img id="vimoffer" src="data:image/png;base64,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" alt="offer"></img>
      
      <div className='vimproleft'>
      <p className='vimproperty'> <b>Property details :</b></p>
      <h3 id='vimlay'>Layout : </h3>
      <h3 id='vimarea'>Carpet Area : </h3>
      <h3 id='vimfur'>Furnishing :</h3>
      <h3 id='vimwid'>Width of facing road :</h3>
      <h3 id='vimfloor'>Floor number :</h3>
      <h3 id='vimFlooring'>Flooring :</h3>
      <h3 id="vimFac">Facing :</h3>
      <h3 id='vimRental'>Rental agreement <br/> duration :</h3>
      <h3 id='vimNotice'>Notice period :</h3>
      <h3 id='vimproid'>Property ID : </h3>
      </div>

      <div className='vimvalues'>
      <h3 id='vimrooms'>2BHK , 3 Baths</h3>
      <h3 id='vimid'>158149122102</h3>
      <h3 id="vimfurid">Semifurnished</h3>
      <h3 id="vimwidid">30.0 ft</h3>
      <h3 id='vimfloorno'>1</h3>
      <h3 id='vimFlooringno'>Spartex</h3>
      <h3 id='vimFacno'>East</h3>
      <h3 id='vimRentalno'>24 months</h3>
      <h3 id='vimNoticeno'>1 Month</h3>
      <h3 id='vimproperid'>900.00sq.ft</h3>
      </div>

      <div className='vimquote'>  
      <h1>Start</h1>
      <h1>Don't Wait Let's Catch!!</h1>
      <h1>There is,</h1>
      <h1>More And More</h1>
      </div>

      <img id='vimrentimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsS3aBHQuWiF8CYcDSj7iadTGRWg5Gzuz6UA&usqp=CAU" alt='renthouse'></img>
      
      <div>
      <img id='vimkitchen' src='https://assets.architecturaldigest.in/photos/60ab3a15b872edd1c5ce586f/master/pass/7%20things%20to%20consider%20when%20designing%20a%20modular%20kitchen%202.jpeg' alt='kitchen'></img>
      <h3 id='vimkitname'>KITCHEN</h3>
      <img id='vimbedroom' src='https://media.designcafe.com/wp-content/uploads/2020/03/21011911/blue-pictures-for-bedrooms-1.jpg' alt='bedroom'></img>
      <h3 id='vimbedname'>BEDROOM</h3>
      <img id='vimHall' src='https://knockoffdecor.com/wp-content/uploads/best-blue-paint-for-living-rooms-hdr.jpg' alt='Hall'></img>
      <h3 id='vimhallname'>HALL</h3>
      <img id='vimbathroom' src='https://c4.wallpaperflare.com/wallpaper/495/107/625/modern-bathroom-furniture-blue-ceramic-sink-wallpaper-preview.jpg' alt='kitchen'></img>
      <h3 id='vimbathname'>BATHROOM</h3>
      </div>

      <Link to="/Home">
      <button class="varFinalrent1close-button" aria-label="Close alert" type="button" data-close>
      <span aria-hidden="true">&times;</span>
      </button>
      </Link>

      </div>
    )
  }
