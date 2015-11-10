import React, { Component } from 'react';
import Screen from './Screen';

const gridValues = ["C", "+/-", "%", "/", "1", "2", "3", "*", "4", "5", "6", "-", "7", "8", "9", "+", "0", ".", "="];

class GridButton extends Component {
    render() {
        return (
            <button 
                className={this.props.className} 
                name={this.props.value}
                onClick={e => this.props.onClick(e.target.name)}>
                    {this.props.value}
            </button>
        )
    }
}

class Grid extends Component {
    constructor(props) {
        super(props)
        this.state = { result: "" }
        console.log(this.props);
    }

    onClick = button => {
        if (button === "=") this.calculate()
        else if (button === "C") this.reset()
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    calculate = () => {
        var checkResult = ''
        if (this.state.result.includes('--')) {
            checkResult = this.state.result.replace('--', '+')
        }
        else checkResult = this.state.result

        try {
            this.setState({
                result: (eval(checkResult) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

    reset = () => { this.setState({ result: "" }) };

    backspace = () => {
        this.setState({ result: this.state.result.slice(0, -1) })
    };

    render() {
        const gridButtons = gridValues.map((btn) =>
            <GridButton 
                key={btn.toString()} 
                className={`gridButton-${btn.toString()}`}
                value={btn}
                onClick={this.onClick}
            />
        );

        return (
            <div>
                <Screen result={this.state.result}/>
                <br/>
                <div className="the-grid">
                    {gridButtons}
                </div>
            </div>
        )
    }
}

export default Grid;