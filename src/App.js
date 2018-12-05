import React, { Component } from 'react';
import './App.css';
import Sky from './Sky';
import Tree from './Tree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sky />
        <Tree />
      </div>
    );
  }
}

export default App;
