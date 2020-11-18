import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state= { 
    ninjas : [
      {name : "Kevin", age : "24", belt : "Red", id : 1},
      {name : "Sahin", age : "24", belt : "White", id : 2},
      {name : "Panagiotis", age : "23", belt : "Black2", id : 3}
    ]
}

  render () {
    return (
      <div className="App">
          <h1>My First ReactApp</h1>
          <p>Hello World</p>
          <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}
export default App;
