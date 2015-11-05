import React, { Component } from 'react';
import Screen from './Screen';

const gridValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const headerOperators = ["C", "+/-", "%", "/"];
// const sideBarOperators = ["X", "-", "+", "="];

class GridButton extends Component {
    constructor(props) {
        super(props)
        this.state = {currentSolution: 0}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state, props) => ({
            currentSolution: props.value
        }));
    }

    render() {
        return (
            <button className="gridButton" onClick={this.handleClick}>
                {this.props.value}
            </button>
        )
    }
}

class Grid extends Component {
    render() {
        const gridButtons = gridValues.map((btn) =>
            <GridButton key={btn.toString()}
                        value={btn} />
        );

        const operatorButtons = headerOperators.map((btn) =>
            <GridButton key={btn.toString()}
                        value={btn} />
        );

        return (
            <div>
                <Screen/>
                <br/>
                <div className="the-grid">
                    {operatorButtons}
                    {gridButtons}
                </div>
            </div>
        )
    }
}

export default Grid;