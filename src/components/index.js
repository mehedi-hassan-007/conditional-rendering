import React, { Component } from "react";
import HomePage from './HomePage';
import LoginPage from './LoginPage';
class Conditional_rendering extends Component{
    constructor (props) {
        super(props)
        this.state= { 
            islogin: true
        }
    }
    render () {
        const islogin = this.state;
        return(
            <div>
                {islogin ? <LoginPage></LoginPage> : <HomePage></HomePage>}
            </div>
        )
        
        
    }
}
export default Conditional_rendering;