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

renderList = () => {
  if ( this.state.supplier.length > 0 ) {
    return this.state.supplier.map((supplier)=> {
      return (<div>
        {supplier.name}
      </div>)
    })
  }
}

render(){



  return (
    <div>
      {this.renderList()}
    </div>
    )
  }
}

export default Supplier;
