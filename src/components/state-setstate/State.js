import React, { Component } from 'react';

class State extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handleIncrease =() => {
        this.setState({count: this.state.count+1})
    }
    handleDencrease =() => {
        this.setState({count: this.state.count-1})
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h3>count: {count}</h3>
                <button onClick={this.handleIncrease} disabled={count===5 ? true : false}>+</button>
                <button onClick={this.handleDencrease} disabled={count===-5 ? true : false}>-</button>
            </div>
        );
    }
}

export default State;
