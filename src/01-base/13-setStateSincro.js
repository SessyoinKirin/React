import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count:1
    }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClickum}>
            add
        </button>
        <button onClick={this.handleClickdois}>
            add
        </button>
      </div>
    )
  }
  handleClickum = ()=>{
      this.setState({
          count:this.state.count+1
      },()=>{
        console.log(this.state.count)
      })
      

      this.setState({
        count:this.state.count+1
    },()=>{
      console.log(this.state.count)
    })
    

    this.setState({
      count:this.state.count+1
  },()=>{
    console.log(this.state.count)
  })
  
  }

  handleClickdois = ()=>{
    setTimeout(()=>{
      this.setState({
        count:this.state.count+1
    })
    console.log(this.state.count)

    this.setState({
      count:this.state.count+1
  })
  console.log(this.state.count)

  this.setState({
    count:this.state.count+1
  })
  console.log(this.state.count)
    },0)
  }
}
