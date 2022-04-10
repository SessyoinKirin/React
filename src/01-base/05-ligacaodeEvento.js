import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <input />  
        <button onClick={ ()=>{
                console.log("click")
                // onMouseOver: apenas aproximando mouse
              //não é recomendado caso de muitos codigo dentro do comando
            }}>addone</button>
        <button onClick={  this.handleClicktwo }>addtwo</button>
        <button onClick={ this.handleClickthree }>addthree</button>
        <button onClick={ ()=>{ 
            this.handleClickfour()
         }}>addfour</button>
      </div>
    )
  }
  handleClicktwo(){
    console.log("clicktwo")
  }

  handleClickthree = ()=>{
      console.log("clickthree")
  }
  handleClickfour = ()=>{
      console.log("clickfour")
  }
}
