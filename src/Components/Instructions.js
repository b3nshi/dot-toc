import React, { Component } from 'react';

class Instructions extends Component {
  render () {
    let text = 'Memorize the colors and click any dot.';
    if (this.props.step !== 0) {
      text = 'Click the dot that changed.';
    }
    return (
      <div className="Instructions">
        {text}
      </div>
    );
  }
};

export default Instructions;