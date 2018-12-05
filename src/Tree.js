import React, { Component } from "react";
import Anime from "react-anime";
import "./Tree.css";

class Tree extends Component {
  render() {
    return (
      <div className="Tree">
        <Anime
          duration={5000}
          direction="alternate"
          loop
          easing="easeInOutQuad"
          rotate={[-1, 1]}
        >
          <img
            src="./tree.svg"
            alt="tree"
          />
        </Anime>
      </div>
    );
  }
}

export default Tree;
