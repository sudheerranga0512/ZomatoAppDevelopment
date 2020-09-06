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
                   
               <div class="Tilecontainer">
                   <div class="Tilecomponent">
                       <img src={item.thumb}/> 
                   </div> 
                   <br/> <br/>
                   <div class="shopname">
                   <div class="shop">{item.name}</div>  
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
    const renderheading=({restdata})=>
    {

        if(restdata)
        {
            return(
                <div>
                
        
                <div class="heading1"><b>Breakfast Places in {restdata.city_name}</b></div>
                </div>
            )
        
        }
    }
    const renderlocation=({restdata})=>
    {
        if(restdata)
        {
            return restdata.map((item)=>
            {
                return(
                    <div>
                
                <datalist id="area"> 
                <option>{item.locality}</option>
                </datalist>
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
             
             {renderheading(props)}
               </div> <div class="filter"> 
                  <br/>
                  <div class="filter1"><b>Filters</b></div> 
                  <div class="filter2"> Select Location</div>
                  <input list="area" id="location" placeholder="Select Location "/>
                {renderlocation(props)}
                <div  class="cuisine"> Cuisine</div>
               
                    <input type="checkbox"class="size"/>
                    <label class="cuisine">North Indian  </label> <br/>
                    <input type="checkbox" class="size" />
                    <label class="cuisine">South Indian  </label><br/>
                    <input type="checkbox" class="size"/>
                    <label class="cuisine">Chinese </label><br/>
                    <input type="checkbox"  class="size" />
                    <label class="cuisine">Fast Food </label><br/>
                    <input type="checkbox"   class="size"/>
                    <label class="cuisine">Street Food </label>
               
                    <div  class="cost"> Cost For Two</div>
                    <input type="radio" id="less than 500"  class="checkmark" name="1" value="1"/>
                    <label for="1" class="cuisine">Less than 500 </label><br/> 
                    <input type="radio" id="less than 500"  class="checkmark" name="2" value="2"/>
                    <label for="2" class="cuisine"> 500 - 1000 </label><br/> 
                    <input type="radio" id="less than 500"  class="checkmark" name="3" value="3"/>
                    <label for="3" class="cuisine"> 1000 - 1500 </label><br/> 
                    <input type="radio" id="less than 500"  class="checkmark" name="4" value="4"/>
                    <label for="4" class="cuisine"> 1500 - 2000 </label><br/>
                    <input type="radio" id="less than 500"  class="checkmark" name="5" value="5"/>
                    <label for="5" class="cuisine">2000+ </label> 
                     
                    <div class="sort"> <b>Sort</b></div>
        
                    <input type="radio" id="Price low to high"  class="checkmark" name="sort" value="6"/>
                    <label for="6" class="cuisine">Price low to high </label><br/>
                    <input type="radio" id="Price high to low"  class="checkmark" name="sort" value="7"/>
                    <label for="7" class="cuisine">Price high to low </label>
               </div>  

               
           {renderdata(props)}
           <div style={{marginLeft:800}} class="b2" >  
                   <button  value="pre" class="pre" onclick="my1();"  >pre</button>
                   <button value="1" id="1"   >1</button> 
                   <button value="2"  id="2" >2</button>
                   <button value="3" id="3">3</button>
                   <button value="4" id="4">4</button> 
                   <button  value="next" class="next" onclick="my();" >next</button>
               </div> 

       </div>
   )
    }
export default Detaildisplay;