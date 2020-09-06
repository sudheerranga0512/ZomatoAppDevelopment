import React from 'react';

const OrderView = (props) => {
    console.log(props)

    const renderTable = ({orderdata}) => {
        if(orderdata){
            return orderdata.map((item) => {
                return(
                    <tr>
                        <td>{item._id}</td>
                        <td>{item.rest_id}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.person}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div className="container">
            <center><h3>Order List</h3></center>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>order_id</th>
                        <th>rest_id</th>
                        <th>name</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>address</th>
                        <th>person</th>
                    </tr>
                </thead>
                <tbody>
                {renderTable(props)}
                </tbody>
                
            </table>
        </div>
    )
}

export default OrderView;