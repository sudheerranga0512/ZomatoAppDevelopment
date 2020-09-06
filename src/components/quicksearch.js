import React,{Component} from 'react';
import Display from './quickdisplay';
 const mealurl="http://localhost:8900/mealtype"
class Quick extends Component{
     constructor()
     {
         super();
         this.state ={
             mealtype:''
         }
     }

render()
{
 return(
     <div>
         <Display mealdata={this.state.mealtype}/>
     </div>

 )
}
componentDidMount()
{
    fetch(mealurl,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>
    {
        this.setState({mealtype:data}); 
        console.log(this.state.mealtype); 
        sessionStorage.setItem("mealtype",this.state.mealtype);
    }) 
 
}

}
export default Quick;