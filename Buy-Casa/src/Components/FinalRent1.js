import React from 'react'
import "./FinalRent1.css";
import { Link } from 'react-router-dom';

export default function FinalRent1() {
  return (
    <div>
    <img id='vimrebg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Daw1fxKaawq-wKrfz3eAE9bzU6pUH7741g&usqp=CAU' alt='Background'>
    </img>
    <h2 className='vimHead'>Keys are waiting</h2>
    <img id='vimreimg' src='https://cdn.homedit.com/wp-content/uploads/house-styles/Cape-Cod-Architecture-House-Style.jpg' alt='House'></img>
    
    <div className='vimdetleft'>
    <p className='vimdetails'> <b>Details :</b></p>
    <h3 id='varcity'>City : </h3>
    <h3 id='varcon'>Contact no : </h3>
    <h3 id='vararea'>Area :</h3>
    <h3 id='varren'>Rent :</h3>
    </div>

    <div className='varvalues'>
      <h3 id='varcinam'>Sulthan Bathery</h3>
      <h3 id='varconno'>8825583012</h3>
      <h3 id="varareadet">7 Ar</h3>
      <h3 id="varrenval">20,000/month</h3>
      </div>

      <div className='varquote1'>  
      <h1>We Sure Your Dream</h1>
      </div>
      <div className='varquote2'>
      <h1>Pick Up SOON!!</h1>
      </div>

      <img id='varbuyimg' src="https://iltcdn.fra1.digitaloceanspaces.com/media/2022/02/real_estate_rev.gif" alt='renthouse'></img>

      <div>
      <img id='varkitchen' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1d9vgTT6_BJEiwZ_kLQLtuyYdzQCiGOxsQ&usqp=CAU' alt='kitchen'></img>
      <h3 id='varkitname'>KITCHEN</h3>
      <img id='varbedroom' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJo5bfhxcg3hcCC2Mria3evWq1vVlKmt3jQg&usqp=CAU' alt='bedroom'></img>
      <h3 id='varbedname'>BEDROOM</h3>
      <img id='varHall' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSME3yS1iHxpfmpd6KYF-X1CpOrD0dm0o2Q&usqp=CAU' alt='Hall'></img>
      <h3 id='varhallname'>HALL</h3>
      <img id='varbathroom' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJ11-QzmNf97-BdJtAi1t3yeOCAtvqZAn3c9Rw5t9T0m7Ivh_l95JMzQDWJzrtDfywJ4&usqp=CAU' alt='kitchen'></img>
      <h3 id='varbathname'>BATHROOM</h3>
      </div>

      <Link to="/Home">
      <button class="varFinalbuy1close-button" aria-label="Close alert" type="button" data-close>
      <span aria-hidden="true">&times;</span>
      </button>
      </Link>

    </div>
    )
}