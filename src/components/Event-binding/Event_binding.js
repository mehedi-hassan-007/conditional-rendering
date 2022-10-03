import React, { Component } from 'react'

export default class Event_binding extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count: 0
        }
        this.handleIncrease = this.handleIncrease.bind(this);
      }
    handleIncrease () {
        this.setState({count: this.state.count+1})
    }
  render() {
    
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <button onClick={this.handleIncrease}>Increase</button>
      </div>
    )
  }
}
