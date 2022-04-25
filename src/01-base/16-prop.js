import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {

    

  render() {
    return (
      <div>
          <div>
              <h1>Inicio</h1>
              <Navbar title="inicio" leftshow={false}/>
          </div>
          <div>
              <h2>Lista</h2>
              <Navbar title="lista" leftshow={true}/>
          </div>
          <div>
              <h3>Carrinho</h3>
              <Navbar title="carrinho" leftshow={true}/>
          </div>
          
      </div>
    )
  }
}
