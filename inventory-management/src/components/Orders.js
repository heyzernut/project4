import React, {Component} from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest';
import Moment from 'react-moment';

class Orders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
  }
  componentDidMount() {
     console.log('mounted')
     fetch("/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.orders)
        this.setState({orders: data.orders })
      })
  }

  render() {
    return (
      <List {...this.state.orders}>
          <Datagrid>
              <TextField source="id" />
              <TextField source="title" />
              <TextField source="body" />
          </Datagrid>
      </List>

      // <div>
      //   <h1>All Orders</h1>
      //     <table>
      //     <thead>
      //       <tr>
      //         <th>Date</th>
      //         <th>Invoice No</th>
      //         <th>Mode of Transport</th>
      //         <th>Delivery Time</th>
      //         <th>Address</th>
      //         <th>&nbsp;</th>
      //       </tr>
      //       </thead>
      //       {this.state.orders.map((order,index)=>{
      //         return (
      //           <tbody key={index}>
      //             <tr>
      //               <td><Moment format="YYYY/MM/DD">{order.date}</Moment></td>
      //               <td>{order.invoiceNo}</td>
      //               <td>{order.modeOfTransport}</td>
      //               <td>{order.deliveryTime}</td>
      //               <td>{order.deliveryAddress}</td>
      //               <td><a href="orders/{{order.id}}">View</a><a href="orders/{{order.id}}">Delete</a></td>
      //             </tr>
      //           </tbody>
      //         )})}
      //       </table>
      //   </div>
    )
  }
}


export default Orders
