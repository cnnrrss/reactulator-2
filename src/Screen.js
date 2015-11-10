import React, { Component } from 'react';

class Screen extends Component {

    render () {
        let {result} = this.props;
        return (
            <input 
                className="display" 
                disabled={true}
                value={result}
            />
        );
    }
}

export default Screen;