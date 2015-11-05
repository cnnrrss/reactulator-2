import React, { Component } from 'react';

class Screen extends Component {
    constructor(props) {
        super(props)
        this.state = {input: props.input};
    }

    render () {
        return (
            <input className="display" disabled={true}/>
        );
    }
}

export default Screen;