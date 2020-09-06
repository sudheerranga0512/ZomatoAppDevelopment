import React from 'react';
import {Link} from 'react-router-dom';
import './restdetails.css'
const Restdisplay=(props)=>
{
    const renderrest=({restpage})=>
    {
        console.log(restpage);
       if(restpage)
       {
           return restpage.map((item)=>
           {
            return(
                <div>
             <div className="container">
        
        <div class="ImageContainer">
         
<img src={item.thumb}class="Image"/>
      </div>
        <div class="containerHeading">
          {item.name}
        </div>
        <div className="navHeadings">
          <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li><a className="active" id="Overview">Overview</a></li>
              <li><a id="Overview">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        <div class="overviewHeading">
          About this place
        </div>
        <div class="overviewSubHeadings">
          <p class="Content">Cusine</p>
          <p class="subContent">fast food</p>

          <p class="Content">Average Cost</p>
          <p class="subContent">$700  for two people</p>
        </div>
        </div>
                </div>
            )
           })
       }
    }

return(
    <div>
        <div class="upperpart"> 
               <logo class="logo1">
                <b>  e! </b>
               </logo>   
       <button id="login" style={{marginLeft:1900}} class="Login">Login</button>
             &nbsp;&nbsp;&nbsp;&nbsp;   <button  id="Create1"> Create an account    </button> 
             </div>
      
          {renderrest(props)}
     
         
    </div>   

)
}
export default Restdisplay;