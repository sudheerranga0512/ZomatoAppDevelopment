import React,{Component} from 'react'
class Search extends Component
{
    constructor()
    {
        super();
        this.state={
            title:'edureka intern',
            word:'enter here',
            city:''

        }
    }
         handlechange=(event)=>
         {
             this.setState({word:event.target.value?event.target.value:'enter here'})
         }
         handlecity=(event)=>
         {
             this.setState({city:event.target.value})
         }
    
    render ()
    {
    return(
        <div>
          <input type="text" onChange={this.handlechange}/>

          <p>{this.state.word}</p>
        <select onChange={this.handlecity}>
            <option>Delhi</option>
            <option>Delhi1</option>
            <option>Delhi2</option>
        </select>
        <p>{this.state.city}</p>
        </div>
    )

    }
}

export default Search;