import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class App extends Component {

  render() {
    return (
      <div>
          <Navbar title="Navegação"></Navbar>

          <Sidebar bg="orange" position="left"></Sidebar>
      </div>
    )
  }
}
