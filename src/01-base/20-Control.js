import React, { Component } from 'react'

export default class App extends Component {
    //myusername = React.createRef()
    state = {
        username:"Chen"
    }
  render() {
    return (
      <div>
          <h1>
              Login
          </h1>
        <input text="barra de pesquisa" value={this.state.username} onChange={(evt)=>{
            console.log("onChange", evt.target.value)

            this.setState({
                username:evt.target.value
            })
        }}/>
        <button onClick={()=>{
            console.log(this.state.username)
        }}>login</button>
        <button onClick={()=>{
            this.setState({
                username:""
            })
        }}>recriar</button>
      </div>
    )
  }
}