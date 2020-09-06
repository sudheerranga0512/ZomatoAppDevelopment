import React, {Component} from 'react';
import axios from 'axios';

const restdetail = "http://localhost:8900/restaurantlist";
class CusineFilter extends Component {

    cuisineFilter = (event) => {
        //sessionStorage.setItem('mealid',this.props.match.params.id)
        let mealid = parseInt(this.props.mealIdNumber)
        let citiid = parseInt(this.props.citiIdNo)
        let cuisine = Number(event.target.value)
        let url;
        if(cuisine == ""){
            url = `${restdetail}/${citiid}/${mealid}`
        }else{
            url = `${restdetail}/${citiid}/${mealid}?cuisine=${cuisine}`
        }
        axios.get(url)
        .then((response) => {this.props.restpercuisine(response.data)})
    }

    render(){
        return(
            <React.Fragment>
               <center>Cuisine</center>
                        <hr/>
                        <div onChange={this.cuisineFilter}>
                        <label className="radio">
                                <input type="radio" value="" name="cuisine"/>All
                            </label>
                            <label className="radio">
                                <input type="radio" value="1" name="cuisine"/>North
                            </label>
                            <label className="radio">
                                <input type="radio" value="2" name="cuisine"/>South
                            </label>
                            <label className="radio">
                                <input type="radio" value="3" name="cuisine"/>Chinese   
                            </label>
                            <label className="radio">
                                <input type="radio" value="4" name="cuisine"/>Fast Food 
                            </label>
                            <label className="radio">
                                <input type="radio" value="5" name="cuisine"/>Street Food
                            </label> 
                            <br/>
                        </div>
            </React.Fragment>
        )               
    }
}


export default CusineFilter;