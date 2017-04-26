import React, { Component } from 'react';
//import logo from './logo.svg';
import Board from './Components/Board';
import Score from './Components/Score';
import Instructions from './Components/Instructions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      assert: 0,
      errors: 0,
      step: 0
    }
  }

  assertSelection() {
    this.setState((prevState, props) => ({
      assert: prevState.assert + 1
    }));
  }

  errorSelection() {
    this.setState((prevState, props) => ({
      errors: prevState.errors + 1
    }));
  }

  toggleStep() {
    this.setState((prevState, props) => ({
      step: 1 - prevState.step
    }));
  }

  render() {
    return (
      <div className="Game">
        <Score assert={this.state.assert} errors={this.state.errors}/>
        <Board assertSelection={this.assertSelection.bind(this)} errorSelection={this.errorSelection.bind(this)}
               toggleStep={this.toggleStep.bind(this)}/>
        <Instructions step={this.state.step}/>
      </div>
    );
  }
}

export default App;
