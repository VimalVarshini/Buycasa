import React from 'react'
import "./AccountPage.css";
import { Link } from 'react-router-dom';

export default function AccountPage() {
  return (
    <div>
        <img id='varisu_img' src='https://media.istockphoto.com/id/1062626948/photo/house-icon-in-front-of-blue-wall-real-estate-concept.jpg?b=1&s=170667a&w=0&k=20&c=47pLYBjU5JxxAzoOmLhvI3NeB3mMNpL07WbqGMRHFqY=' alt='Background'></img>
        <img id='varisu_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14DivXLLXA6daY-W7w-zNlTP15-u4yTlAEg&usqp=CAU' alt='logo'></img>
        <h1 className='varisu_title' >Account Settings:</h1>
        <div>
        <label  className='varisu_det1' for="myInput"><h3>First Name: </h3></label>
        <input id="var1" type="text"/>
        </div>
        <div>
        <label  className='varisu_det2' for="myInput"><h3>Last Name: </h3></label>
        <input id="var2" type="text"/>
        </div>
        <div>
        <label  className='varisu_det3' for="myInput"><h3>Email: </h3></label>
        <input id="var3" type="text"/>
        </div>
        <div>
        <label  className='varisu_det4' for="myInput"><h3>Phone no: </h3></label>
        <input id="var4" type="text"/>
        </div>
        <div>
        <label  className='varisu_det5' for="myInput"><h3>Location: </h3></label>
        <input id="var5" type="text"/>
        </div>
        <div>
        <label  className='varisu_det6' for="myInput"><h3>Bio: </h3></label>
        <input id="var6" type="text"/>
        </div>
        <div>
        <button  type='Submit' value={"Submit"} id="varisu_update"><strong>Update</strong></button>
      </div>
        <div>

        <Link to="/ ">
        <button  type='Submit' value={"Submit"} id="varisu_signout"><strong>Sign Out</strong></button>
        </Link>
      </div>
</div>
)
}