import React, { Component } from 'react';
import Sky from './Sky';
import Tree from './Tree';
import Stars from './Stars';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sky />
        <Tree />
        <Stars />
      </div>
    );
  }
}

export default App;
