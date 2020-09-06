import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const url="http://localhost:8900/location"
const url1="http://localhost:8900/restauranthome?city=" 

class Search extends Component
{
    constructor(props)
    {
        console.log("constructor") ;
        
        super(props);
       
        this.state={
            title:'edureka intern',
            city:'',
            location:'',
            restaurants:''
        

        }
        

    }
    handlerestarunt=(event)=>
    {
        window.open(`rest/${this.state.restaurants[event.target.value]._id}`,'_self');
    } 
    
         handlecity=(event)=>
         {
            this.setState({restaurents:''})
             this.setState({city:event.target.value})
             var cityid=parseInt(event.target.value)
             sessionStorage.setItem('cityId',event.target.value)
             console.log(`${url1}${cityid}`)
             fetch(`${url1}${cityid}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})  
        })
         } 
         
       
         rendercity=(data)=>
         { 
             
             if(data)
             {
                 return data.map((item)=>
                 { 
                     return(
                         <option value={item.city} >
                              {item.name}
                         </option>
                     )
                 })
             }
         } 
          renderrestaurant=(data)=>
         {  
             console.log(data)
             if(data)
             {  
                   let i=-1;
             return data.map((item)=>
             {  
                    
                 return(
                     <option  value={i=i+1}>  
                      {item.name} | {item.locality}
                     </option>
                 )
             })
            }
         }
    
    render ()
    {
        console.log("render")
    return(
    
            <center>
        <div class=" container imageContainer">
            <div class="logo">
                e!
            </div>
            <div class="heading">
                Find the best restaurants,cafes, and bars
            </div>
         <select class="locationDropDown"onChange={this.handlecity}>
         {this.rendercity(this.state.location)}
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;
        
        <input class="restaurantsInput"list="restaurants" name="rests" id="rests"  onChange={this.handlerestarunt}   />
        <datalist id="restaurants" >
            {this.renderrestaurant(this.state.restaurants)}
        </datalist>
        </div>
        
        </center>
        
    )

    }
    componentDidMount ()
    {
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({location:data})
            
        
        
        }) 
    

    }
}

export default Search;