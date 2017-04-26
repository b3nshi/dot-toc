import React, { Component } from 'react';

class Score extends Component {
  render () {
    return (
      <div className="Score">
        <div className="asserts">{this.props.assert}</div>
        <div className="errors">{this.props.errors}</div>
      </div>
    );
  }
};

export default Score;