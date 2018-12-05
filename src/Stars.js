import React, { Component } from 'react';
import Anime from 'react-anime';
import './Stars.css';

const NUM_STARS = 200;
const X_MAX = 400;
const Y_MAX = 400;

const rand = max => Math.floor(Math.random() * max);

class Stars extends Component {
  constructor(props) {
    super(props);
    const stars = Array.from({
      length: NUM_STARS
    }, () => ([rand(X_MAX), rand(Y_MAX)]));
    this.state = {
      stars,
    };
  }

  render() {
    const { stars } = this.state;
    return (
      <div>
        {stars.map((star, ind) => {
          return (
            <Anime
              key={ind}
              duration={50000}
              direction="alternate"
              loop
              delay={ind*500}
              translateX={['-10vw', '110vw']}
              translateY={[star[0], star[1]]}
              rotate='1turn'
            >
              <div className="Stars--star" />
            </Anime>
          );
        })}
      </div>
    );
  }
}

export default Stars;
