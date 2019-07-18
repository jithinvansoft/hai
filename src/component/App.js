import React, {Component} from 'react';
import './App.css';
import Add from './component/Add'
import Country from './component/Country'
class  App extends  Component {
  constructor(props){
    super(props)
    this.state={
      india:["jibin","mush"],
      canada:["sankar"]
    }
    this.onAdd = this.onAdd.bind(this)
  }

  onAdd(country, name){
    this.setState ( (state, entry) => {

    var newstate =    {
      canada: [...state.canada],
      india: [...state.india]
    }

    newstate[country].push(name)

    return ( newstate )

    } )
  }

  render(){
    return (
      <div className="App">
          <Country country="Canada" member={this.state.canada}></Country>
          <Country country="India" member={this.state.india}></Country>
          <Add onAdd={this.onAdd}> </Add>
      </div>
    );
  }
}

export default App;
