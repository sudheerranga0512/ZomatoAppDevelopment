import React,{Component} from 'react';
import axios from 'axios';
import OrderView from './orderView';

const orderdetail = "http://localhost:8900/allOrder";

class OrderDisplay extends Component{
    constructor(){
        super()

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <div>
            <div className="container">
                <div>
                    <OrderView orderdata={this.state.orders}/> 
                </div>
            </div>
        </div>
        )
    }

    componentDidMount(){
        axios.get(`${orderdetail}`)
        .then((response) => {this.setState({orders:response.data}) 
    console.log(response.data);})
    }
}


export default OrderDisplay;