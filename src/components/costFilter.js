import React, {Component} from 'react';
import axios from 'axios';

const restdetail = "http://localhost:8900/restaurantlist";
class CostFilter extends Component {
    
    costFilter = (event) => {
        let mealid = parseInt(this.props.mealIdNumber)
        let cost = (event.target.value).split(',');
        let citiid = parseInt(this.props.citiIdNo)
        let lcost = Number(cost[0]);
        let hcost = Number(cost[1]);
        let url;
        if(event.target.value==""){
            url = `${restdetail}/${citiid}/${mealid}`
        }else{
            url = `${restdetail}/${citiid}/${mealid}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(url)
        .then((response) => {this.props.restpercost(response.data)})
    }

    render(){
        return(
            <React.Fragment>
                <center>Cost To Filter</center>
                <hr/>
                <div onChange={this.costFilter}>
                        <label className="radio">
                                <input type="radio" value="" name="range"/>All
                            </label>
                            <label className="radio">
                                <input type="radio" value="0,500" name="range"/>0-500
                            </label>
                            <label className="radio">
                                <input type="radio" value="501,1000" name="range"/>500-1000
                            </label> 
                </div>
            </React.Fragment>
        )               
    }
}


export default CostFilter