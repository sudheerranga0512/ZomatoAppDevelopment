import React from 'react';
import {Link} from 'react-router-dom';
import './quickdisplay.css';
 const Display=(props)=>
 {
     const Meal=({mealdata})=>
     {
  if(mealdata)
  {
      return mealdata.map((item)=>
      {
          return( 
              <div> 
              <Link to={`/Details/${item.mealtype}`}> 
             
              <div class="tileContainer">
                <div class="tileComponent1">
                
                       <img src="breakfast.jpg"height="160px" width="160px"/>
                </div>
                    <div class="tileComponent2">
                    
                        <div class="componentHeading">{item.name}</div>
                        <div class="componentSubHeading">Start your day with exclusive food options</div>
                        
                        
                    </div>
                   
            </div>
            
                  
              </Link>
              </div>

)
      })
  }
 }
 return(
    <div>
        <div className="container">
         <div class="quickSearchContainer">
            <p class="quickSearchHeading">Quick Searches</p>
            <p class="quickSearchSubHeading">
                Discover restaurants by type of meal</p>
            </div>
            
 

         
         <div>
        {Meal(props)}
       
       </div>

    </div>
    </div>
 )
}
export default Display;