import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state= { 
    ninjas : [
      {name : "Kevin", age : "24", belt : "Red", id : 1},
      {name : "Sahin", age : "24", belt : "White", id : 2},
      {name : "Panagiotis", age : "23", belt : "Black2", id : 3}
    ]
}

addNinja = (ninja) => {
  ninja.id = Math.random();
  let ninjas = [...this.state.ninjas, ninja]
  this.setState({
    ninjas: ninjas
  })
}

deleteNinja = (id) => {
  let ninjas = this.state.ninjas.filter(ninja => {
    return ninja.id !== id
  })
  this.setState({
    ninjas: ninjas
  })
}

  render () {
    return (
      <div className="App">
          <h1>My First ReactApp</h1>
          <p>Hello World</p>
          <Ninjas deleteN inja={this.deleteNinja} ninjas={this.state.ninjas}/>
          <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}
export default App;
