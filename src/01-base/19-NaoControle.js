import React, { Component } from 'react'

export default class App extends Component {
    myusername = React.createRef()
  render() {
    return (
      <div>
          <h1>
              Login
          </h1>
        <input text="barra de pesquisa" ref={this.myusername} defaultValue="Chen"/>
        <button onClick={()=>{
            console.log(this.myusername.current.value)
        }}>login</button>
        <button onClick={()=>{
            this.myusername.current.value = ""
        }}>
            recriar
        </button>
      </div>
    )
  }
}
