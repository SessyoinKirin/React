import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  render() {
      var nome = "meu nome"
      var obj = {
          backgroundColor: "green",
          fontSize: "30px"
      }
    return (
        <div>
            {10+20}-{nome}

            {10>20?"aaa":"bbb"}


            <div style={obj}>
                114514
            </div>
            <div style={{background: "yellow"}}>
                114514
            </div>
            {/* React推荐使用行内样式，因为每一个组件都是一个独立的整体 */}
            <div className="active">
                114514
            </div>
            <div id='myapp'>
                114514
            </div>

            <label htmlFor="username">Nome do Mano</label>
            <input type="text" id="username"/>
        </div>
    )
  }
}
