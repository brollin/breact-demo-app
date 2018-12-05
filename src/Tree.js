import React, { Component } from 'react';
import './Tree.css';

class Tree extends Component {
  render() {
    return (
      <div className="Tree">
        <img
          src="./tree.svg"
          alt="tree"
        />
      </div>
    );
  }
}

export default Tree;
