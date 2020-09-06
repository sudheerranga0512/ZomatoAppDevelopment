import React,{Component} from 'react'
import axios from 'axios' 
import {Link} from 'react-router-dom';
import Detaildisplay from'./detailsdisplay' 
import "./detailsdisplay.css"
const restdetail="http://localhost:8900/restaurantlist" 
var i=0,url,url1;
class Details extends Component
{
    constructor(props)
    {
        super(props)  
        this.render = this.render.bind(this); 
        this.display=this.display.bind(this); 
        this.cuisinefilter=this.cuisinefilter.bind(this); 
        this.sortfilter=this.sortfilter.bind(this); 
        this.costfilter=this.costfilter.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            cityid:parseInt(sessionStorage.getItem('cityId')),
            restlist:[] , 
            cityname:"", 
            mealtype:"", 
            cuisine:"",
            hcost:"", 
            lcost:"",
            sort:"",  
            url:"", 
            url1:"",
            mealid:parseInt(this.props.match.params.id) ,
            
        }
    }  
    display(){
        if(this.state.restlist.length>i ){    
            url=`/rest/${this.state.restlist[i]._id}`;
            document.getElementById("demo").style.visibility='hidden';
            document.getElementById("TileContainer2").style.visibility='visible';
            document.getElementById("thumb").src=this.state.restlist[i].thumb;
           document.getElementById("shop").innerHTML=this.state.restlist[i].name;
           document.getElementById("place").innerHTML=this.state.cityname;
           document.getElementById("address").innerHTML=this.state.restlist[i].address;  
           }   
     
      if(this.state.restlist.length==1){
        document.getElementById("TileContainer3").style.visibility='hidden'; 
      }
        console.log(this.state.restlist.length);
           if(this.state.restlist.length>i+1){    
            url1=`/rest/${this.state.restlist[i]._id}`;
            document.getElementById("TileContainer3").style.visibility='visible';
           document.getElementById("thumb1").src=this.state.restlist[i+1].thumb;
           document.getElementById("shop1").innerHTML=this.state.restlist[i+1].name;
           document.getElementById("place1").innerHTML=this.state.cityname;
           document.getElementById("address1").innerHTML=this.state.restlist[i+1].address; 
           if(this.state.restlist>=i+1){  
           i=i+2;}
           }    
        
           
          
    }   
    sortfilter(event){
        let sort1=event.target.value;  
        this.setState({sort:sort1});  
        console.log(this.state.sort);  
        console.log(`${restdetail}/${this.state.cityid}/${this.state.mealid}?sort=${sort1}&lcost=${this.state.lcost}&hcost=${this.state.hcost}&cuisine=${this.state.cuisine}`);
         
        axios.get(`${restdetail}/${this.state.cityid}/${this.state.mealid}?sort=${sort1}&lcost=${this.state.lcost}&hcost=${this.state.hcost}&cuisine=${this.state.cuisine}`)
           .then((response)=>{this.setState({restlist:response.data}); 
           if(response.data.length==0){ 
            document.getElementById("demo").style.visibility='visible';
            document.getElementById("TileContainer2").style.visibility='hidden'; 
            document.getElementById("demo").innerHTML="<center>Sorry  on your Selection,we dont Have Restaurants</center>"
           } 
           if(response.data.length<=1){
               document.getElementById("TileContainer3").style.visibility='hidden';
           }
        console.log(response.data);})  
           console.log(this.state.restlist);
           {this.display()}
    }
    costfilter(event){
        let cost1=(event.target.value).split(',');  
     let hcost=parseInt(cost1[1]);
        let lcost=parseInt(cost1[0]); 
        this.setState({hcost:cost1[1]});
        this.setState({lcost:cost1[0]});
        console.log(`${restdetail}/${this.state.cityid}/${this.state.mealid}?lcost=${cost1[0]}&hcost=${cost1[1]}&sort=${this.state.sort}&cuisine=${this.state.cuisine}`);
      
       axios.get(`${restdetail}/${this.state.cityid}/${this.state.mealid}?lcost=${lcost}&hcost=${hcost}&sort=${this.state.sort}&cuisine=${this.state.cuisine}`)
       .then((response)=>{this.setState({restlist:response.data}); 
       if(response.data.length==0){ 
           document.getElementById("demo").style.visibility='visible';
        document.getElementById("TileContainer2").style.visibility='hidden'; 
        document.getElementById("demo").innerHTML="<center>Sorry  on your Selection,we dont Have Restaurants</center>"
       } 
       if(response.data.length<=1){
           document.getElementById("TileContainer3").style.visibility='hidden';
       }
    
       console.log(response.data);})
       console.log(this.state.restlist);
       {this.display()}
        
    }
    cuisinefilter(event){
        let cuisine1=event.target.value;  
        this.setState({cuisine:cuisine1}); 
        console.log(`${restdetail}/${this.state.cityid}/${this.state.mealid}?cuisine=${cuisine1}&lcost=${this.state.lcost}&hcost=${this.state.hcost}&sort=${this.state.sort}`);
        
        axios.get(`${restdetail}/${this.state.cityid}/${this.state.mealid}?cuisine=${cuisine1}&lcost=${this.state.lcost}&hcost=${this.state.hcost}&sort=${this.state.sort}`)
        .then((response)=>{this.setState({restlist:response.data}); 
        if(response.data.length==0){ 
            document.getElementById("demo").style.visibility='visible';
            document.getElementById("TileContainer2").style.visibility='hidden'; 
            document.getElementById("demo").innerHTML="<center>Sorry on your Selection,we dont Have Restaurants</center>"
           } 
           if(response.data.length<=1){
               document.getElementById("TileContainer3").style.visibility='hidden';
           }
       
        console.log(response.data); 
         })  
        console.log(this.state.restlist);
        {this.display()}
        
    }
    handleClick(event){ 
       console.log(this.state.restlist);  
    let  x=event.target.value; 
       if(i>0 && x=="previous"){
           i--; 
           console.log(i);
       }  
       else if(i>0&&this.state.restlist>=i+1 && x=="next"){ 
           console.log(i);
           i++
       }
       if(this.state.restlist.length>i ){ 
        console.log(i);  
        url=`/rest/${this.state.restlist[i]._id}`;
        document.getElementById("TileContainer2").style.visibility='visible';
        document.getElementById("thumb").src=this.state.restlist[i].thumb;
       document.getElementById("shop").innerHTML=this.state.restlist[i].name;
       document.getElementById("place").innerHTML=this.state.cityname;
       document.getElementById("address").innerHTML=this.state.restlist[i].address;  
       }  
       else{
        document.getElementById("TileContainer2").style.visibility='hidden';
       }
    
       if(this.state.restlist.length>i+1){ 
        console.log(i);    
           url1=`/rest/${this.state.restlist[i]._id}`;
        document.getElementById("TileContainer2").style.visibility='visible';
       document.getElementById("thumb1").src=this.state.restlist[i+1].thumb;
       document.getElementById("shop1").innerHTML=this.state.restlist[i+1].name;
       document.getElementById("place1").innerHTML=this.state.cityname;
       document.getElementById("address1").innerHTML=this.state.restlist[i+1].address;  
       }   
       else{
           document.getElementById("TileContainer3").style.visibility='hidden';
       }
       
    }   
    
    render(){
        
  
    return(
        <div class="body">
           
        <div class="upperpart"> 
            <logo class="logo1">
             <b>  e! </b>
            </logo>   
          <a id="login" href="login.html">Login</a>   
          &nbsp;&nbsp;&nbsp;&nbsp;    
          <button  class="create" style={{marginLeft:30}}> <b>Create an account</b>    </button> 
          </div> 
          <div class="heading"> <b> <center>{this.state.mealtype} In {this.state.cityname} Near Your Location</center></b></div>
          
           
            <div class="filter"> 
               <br/>
               <div id="filter1"><b>Filters</b></div> 
               <div id="filter2"> Select Location</div>
               <input list="area" id="location" placeholder="Select Location "/>
               <datalist id="area"> 
             <option>area</option>
             </datalist>
             <div  class="cuisine1" style={{marginTop:20}}> Cuisine</div>
            
                 <input type="radio" class="size" style={{size:10}} name="cuisine" value="1" onClick={this.cuisinefilter} class="checkmark" />
                 <label class="cuisine" style={{marginLeft:20}}>North Indian  </label> <br/>
                 <input type="radio" class="size" style={{size:10}} name="cuisine" value="2"  onClick={this.cuisinefilter}  class="checkmark"  />
                 <label class="cuisine" style={{marginLeft:20}}>South Indian  </label><br/>
                 <input type="radio" class="size" style={{size:10}} name="cuisine" value="3"  onClick={this.cuisinefilter} class="checkmark" />
                 <label class="cuisine" style={{marginLeft:20}}>Chinese </label><br/>
                 <input type="radio" class="size" style={{size:10}} name="cuisine" value="4"  onClick={this.cuisinefilter} class="checkmark"  />
                 <label class="cuisine" style={{marginLeft:20}}>Fast Food </label><br/>
                 <input type="radio"  class="size" style={{size:10}} name="cuisine" value="5"  onClick={this.cuisinefilter} class="checkmark" />
                 <label class="cuisine" style={{marginLeft:20}}>Street Food </label>
            
                 <div  class="cost"> Cost For Two</div>
                 <input type="radio" id="less than 500"  class="checkmark" name="cost"  onClick={this.costfilter} value="0,500"/>
                 <label for="1" class="cuisine" style={{marginLeft:20}}>Less than 500 </label><br/> 
                 <input type="radio" id="less than 500"  class="checkmark" name="cost"  onClick={this.costfilter} value="501,1000"/>
                 <label for="2" class="cuisine" style={{marginLeft:20}}> 500 - 1000 </label><br/> 
                 <input type="radio" id="less than 500"  class="checkmark" name="cost"  onClick={this.costfilter} value="1001,1500"/>
                 <label for="3" class="cuisine" style={{marginLeft:20}}> 1000 - 1500 </label><br/> 
                 <input type="radio" id="less than 500"  class="checkmark" name="cost"  onClick={this.costfilter} value="1501,2000"/>
                 <label for="4" class="cuisine" style={{marginLeft:20}}> 1500 - 2000 </label><br/>
                 <input type="radio" id="less than 500"  class="checkmark" name="cost"  onClick={this.costfilter} value="2000"/>
                 <label for="5" class="cuisine" style={{marginLeft:20}}>2000+ </label> 
                  
                 <div class="sort"> <b>Sort</b></div>
     
                 <input type="radio" id="Price low to high"  class="checkmark" name="sort"  onClick={this.sortfilter} value="1"/>
                 <label for="6" class="cuisine" style={{marginLeft:10}}>Price low to high </label><br/>
                 <input type="radio" id="Price high to low"  class="checkmark" name="sort"  onClick={this.sortfilter} value="-1"/>
                 <label for="7" class="cuisine" style={{marginLeft:10}}>Price high to low </label>
            </div> 
            {this.display()}    
            <div>           
            
               <div id="TileContainer2" class="TileContainer2"  >
                   <div class="TileComponent3">
                       <img id="thumb" src=""/> 
                   </div> 
                   <br/>
                   <div class="shopname">
                   <div class="shop"><Link id="shop" to={url}></Link></div>  
                   <div id="place" class="place"></div>
                   <div id="address" class="address"></div>
                   </div>  
                    <hr/>
                         </div> 
 <br/>
</div>   
<div id="demo" style={{marginLeft:700},{fontSize:40}}></div> 
<div>           
               <div id="TileContainer3"  class="TileContainer3" >
                   <div class="TileComponent3">
                       <img id="thumb1" src=""/> 
                   </div> 
                   <br/>
                   <div class="shopname">
                   <div  class="shop"><Link id="shop1" to={url1}></Link></div>  
                   <div id="place1" class="place"></div>
                   <div id="address1" class="address"></div>
                   </div>  
                    <hr/>
        
                 </div>  
                
 <br/>  

 
<button onClick={this.handleClick} value="previous" className="btn btn-primary" style={{marginLeft:700}}>Previous</button>
<button onClick={this.handleClick} value="next" className="btn btn-primary" style={{marginLeft:300}}>Next</button>
</div>

    </div>  

    
   ) 

    }
   componentDidMount()
   {
       let mealid=parseInt(this.props.match.params.id) 
     console.log(`${restdetail}/${this.state.cityid}/${mealid}`)
      axios.get(`${restdetail}/${this.state.cityid}/${mealid}`) 
       .then((response)=>{this.setState({restlist:response.data})  
    //console.log(this.state.restlist[0].name); 
    //console.log(this.state.restlist[0].thumb); 
    //console.log(this.state.restlist);} ) 
   }) 
   document.getElementById("TileContainer2").style.visibility='hidden' ; 
   document.getElementById('demo').innerHTML="<center>no Restaurants available</center>";
   document.getElementById("TileContainer3").style.visibility='hidden';
    axios.get('http://localhost:8900/location') 
    .then((response)=>{  
        let c=[];  
        console.log(response.data);
    c=  response.data.filter((item)=>{
           return item.city==this.state.cityid;
        }) 
        console.log(c[0].city_name);
        this.setState({cityname:c[0].city_name})  
        
    console.log(this.state.cityname); 
    }); 
    axios.get('http://localhost:8900/mealtype') 
    .then((response)=>{  
        let c=[];  
        console.log(response.data);
    c=  response.data.filter((item)=>{
           return item.mealtype==mealid;
        }) 
        console.log(c[0].name);
        this.setState({mealtype:c[0].name})  
        
    console.log(this.state.cityname); 
    });

   
    
   }
}
export default Details;