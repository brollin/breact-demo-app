import React, { Component } from 'react';
import './App.css';
import Sky from './Sky';
import Tree from './Tree';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Coming soon.
          </p>
        </header>*/}
        <Sky />
        <Tree />
      </div>
    );
  }
}

export default App;
