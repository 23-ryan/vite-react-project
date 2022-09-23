import React, {Component} from 'react'
import { useState } from 'react'

class Count extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        this.handleCount = this.handleCount.bind(this)
    }

    handleCount(){
        this.setState((prevState) => ({count: prevState.count}))
    }

    render(){
        return (
            <div>
                <button onClick={()=>{this.state.count += 1; this.handleCount()}}>Count is {this.state.count}</button><br /><br />
                <button onClick={()=>{this.state.count = 0; this.handleCount()}}>Reset</button>
            </div>
        )
    }
}

export default Count