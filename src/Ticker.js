import React, { Component } from 'react'

export  class Ticker extends Component {

    state = 
    {
        counter : 0
    }

    componentDidMount()
    {
        this.interval = setInterval(this.tick , 1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.interval)
        alert('deleting the ticker')
    }
    componentDidUpdate()
    {
        document.getElementById('status').innerHTML = 'updating.......'
    }

    tick = () =>
    {
        this.setState ({counter : this.state.counter + 1})
    }
    render() {
        return (
            <div style ={{textAlign : 'center'}}>
                <h3 style ={{color : 'crimson'}}>Timer : {this.state.counter} </h3>
                <button onClick={() => this.setState({counter : 0})}> RESET </button>
                <p style ={{color : 'white' , backgroundColor : 'blue'}} id = 'status'> </p>
            </div>
        )
    }
}
 



export  class Container extends Component {
    state = {
        show : true
    }
    deleteticker =()=>
    {
        this.setState({show : false})
    }
    render() {
        return (
            <div>
               {this.state.show ? <Ticker/> : <p> deleted</p>} 
               {this.state.show ?  <button onClick ={this.deleteticker}>Delete Ticker</button> : <p></p>}
            </div>
        )
    }
}
