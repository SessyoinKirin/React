import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {

    

  render() {

    var obj = {
      title:"Teste",
      leftshow:false
    }

    return (
      <div>
          <div>
              <h1>Inicio</h1>
              <Navbar title="inicio" leftshow={false}/>
          </div>
          <div>
              <h2>Lista</h2>
              <Navbar title="lista"/>
          </div>
          <div>
              <h3>Carrinho</h3>
              <Navbar{...obj}></Navbar>
              <Navbar title={obj.title} leftshow={obj.leftshow}/>
          </div>
          
      </div>
    )
  }
}
