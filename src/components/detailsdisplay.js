import React from 'react';
import {Link} from 'react-router-dom';
import './detailsdisplay.css';

var Detaildisplay = (props) =>

{
    const renderdata=({restdata})=>
    {
        
        console.log(restdata)
        if(restdata)
        {
            return restdata.map((item)=>
            {
            return (
            <div>
                   
               <div class="TileContainer">
                   <div class="TileComponent">
                       <img src={item.thumb}/> 
                   </div> 
                   <br/>
                   <div class="shopname">
                   <div class="shop"><Link to={`/rest/${item._id}`}>{item.name}</Link></div>  
                   <div class="place">{item.cityname}</div>
                   <div class="address">{item.address}</div>
                   </div>  
                    <hr/>
        <div class="about">
                       <pre>
         CUSINES                  Bakery<br/>
         COST FOR TWO              700
                       </pre> 
                       </div>
                
                
               </div> 
                 
              
               
                <br/> 
                
               
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
       
             &nbsp;&nbsp;&nbsp;&nbsp;   <button  class="create"> Create an account    </button> 
             
               

       </div>
       </div>
   )
    }
export default Detaildisplay;