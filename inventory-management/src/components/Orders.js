import React, {Component} from 'react';

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
      <div>
        {this.state.orders.map((order)=>{
          return <div>{order.invoiceNo}</div>
        })}
      </div>
    )
  }
}


export default Orders
