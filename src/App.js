import React, { Component } from 'react';
import './App.css';
import GitHub from './Api.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GitHub username="deazee101"></GitHub>
      </div>
    );
  }
}

export default App;
