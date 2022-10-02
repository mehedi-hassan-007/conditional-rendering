import React, { Component } from 'react'

export default class Event_handler extends Component {
    
    constructor(props) {
        super(props)
        this.state={
            changeValue: ''
        }
    }
    handleChange = (e) => {
        this.setState({changeValue : e.target.value})
    }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.changeValue}</p>
      </div>
    )
  }
}
