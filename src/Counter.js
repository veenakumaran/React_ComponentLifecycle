
import React, { Component } from 'react'

export default class Counter extends Component {
    state =
    {
        count : 0
    }

    incrementcount=()=>
    {
        this.setState(prevState => this.state.count = prevState.count + 1 )
        
    }
    decrementcount = () => 
    {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
           
        })
    }
       
    render() {
        return (
            <div style ={{textAlign : 'center'}}>
                <h3 style ={{color : 'crimson'}}>Counter : {this.state.count} </h3>
                <button onClick = {this.incrementcount}>INCREMENT</button>
                <button onClick = {this.decrementcount}>DECREMENT</button>
            </div>
        )
    }
}
