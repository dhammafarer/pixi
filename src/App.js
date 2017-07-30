import React, { Component } from 'react';
import { fushanMicrogrid } from './data/power-systems.js';
import { fushan } from './data/cases-2d.js';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cases2d:[],
      systems: [],
      activeIdx: 0
    };
  }

  componentDidMount () {
    this.setState({
      cases2d: [fushan],
      systems: [fushanMicrogrid]
    });
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
