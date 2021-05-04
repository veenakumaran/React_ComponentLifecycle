import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './Counter';

import {Container,Ticker} from './Ticker'

//basics on different lifecycle methods

class ComponentLifeCycle extends Component {

  state={
    updated : false,
    show : true
  }

  updateState=()=>
  {
   this.setState({updated : false})
  }
  deleted=()=>
  {
    this.setState({show : false})

  }
  
  componentDidMount()
  {
   document.getElementById('heading').innerHTML = "Mounted......"
   alert('page is loaded')
  }

  componentDidUpdate()
  {
    alert('state is updated')
  }

  render() {
 
    return (
      <div style = {{textAlign : 'center'}}>
        {this.state.show ? <ComponentOne/> : <p>deleted</p>}
         {this.state.show ?<button onClick ={this.deleted}>DELETE ME</button> : <p></p>}
        <h3  >Component Life Cycle methods</h3>
        <h3 id= 'heading' >Watch here......</h3>
        <button onClick ={this.updateState}>HIT ME</button>
      </div>
    )
  }
}

class ComponentOne extends Component {
  
  componentWillUnmount()
  {
     alert ('this component will be deleted')
  }

  render() {
    return (
      <div>
        <h3 style = {{color : 'turquoise' ,textAlign : 'center'}}>Component One</h3>
      </div>
    )
  }
}

ReactDOM.render(
   <div>
   <ComponentLifeCycle/>
   <Counter/> 
   <Container/>
   </div>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
