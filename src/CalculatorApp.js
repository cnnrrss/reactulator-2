import React, { Component } from 'react';
import Grid from './Grid';
import './CalculatorApp.css';

class CalculatorApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
            <Grid/>
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
