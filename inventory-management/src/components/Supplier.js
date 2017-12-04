import React, {Component} from 'react';

class Supplier extends Component {
  constructor(props){
    super(props)
    this.state = {
      supplier: []
    }
  }
  componentDidMount() {
    console.log('mounted')
    fetch("/suppliers")
      .then((res) => res.json())
      .then((data)=> {
        console.log(data.supplier);
        this.setState({supplier: data.supplier})
      })
    }

render(){
  return (
    <div>
      {this.state.supplier.map((supplier)=> {
        return (<div>
          {supplier.name}
        </div>)
      })}
    </div>
    )
  }
}

export default Supplier;
