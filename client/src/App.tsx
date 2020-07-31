import React, { Props } from 'react';
import logo from './logo.svg';
import './App.css';

interface IProps{

}
interface IState{
  customers: {name: string, id: string}[]
}



class App extends React.Component<IProps, IState>{
  constructor(props: IProps){
    super(props);
    this.state = {customers:[]}
  }
  
  componentDidMount(){
    fetch('/customers')
    .then(res=>res.json())
    .then(loadedCustomers=> this.setState({customers: loadedCustomers}));
  }
  render(){
    return(
      <div className="App">
        {this.state.customers.map(customer=>{
          return <li key={customer.id}>{customer.name}</li>
        })}
      </div>
    )
  }
}

export default App;
