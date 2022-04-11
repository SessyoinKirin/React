import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    myref = React.createRef()
  render() {
    return (
      <div>
        <input ref={this.myref}/> 
        {/* <input ref="mytext2"/>   */}
        <button onClick={ ()=>{
                // console.log("click",this.refs.mytext2.value)
                //refs nao vai ser usada mais, entao precisa instanciar no React.createref
                console.log("click1", this.myref.current.value)
            }}>addone</button>
        
      </div>
    )
  }
}