import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list:[
            {
                id:1,
                text:"1111"
            },
            {
                id:2,
                text:"2222"
            },
            {
                id:3,
                text:"3333"
            }
        ]
    }
  render() {
    //   var newlist = this.state.list.map(item=><li>{item}</li>)
    return (
      <div>
          <ul>
            {
                // newlist
                this.state.list.map((item, index) =>
                <li key={index}> 
                    {item.text}--{index}
                </li>
                )
            }
          </ul>
      </div>
    )
  }
}

/**
 * 
 * js - map
 */

// var list = ["aa", "bb", "cc"]
// var newlist = list.map(item=>'<li>{item}</li>')
// console.log(newlist.join(""))

/**
 * reuso ou reorganizacao usa key
 * key perspectivo: item.id
 * 
 */