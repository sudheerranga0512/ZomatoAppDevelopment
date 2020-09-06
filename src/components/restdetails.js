import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Restdisplay from './restdisplay';

const restdetail = "http://localhost:8900/restaurantdetails";
class Restaurant extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            rest:[]
        }
    }
    backbutton = (event) => {
        let mealid = parseInt(sessionStorage.getItem('mealid'))
        this.props.history.push(`/details/${mealid}`)
    }
    render()
    {
        return(
            <div>
            <Restdisplay restpage={this.state.rest}/>
            <div className="row">
                            <button class="btn btn-danger btn-lg"
                            onClick={this.backbutton} id="Back">Back</button>
                            &nbsp;
                            <Link to={`/order/${this.props.match.params.id}`} id="PlaceOrder" class="btn btn-success btn-lg">Place Order</Link>
                        </div>
                        </div>
        )

    }

componentDidMount(){
    let restid = parseInt(this.props.match.params.id)
    console.log(`${restdetail}/${restid}`)
    axios.get(`${restdetail}/${restid}`)
    .then((response) => {this.setState({rest:response.data})})
}
}

export default Restaurant;