import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div>
            Child-{this.props.text}

            <button onClick={()=>{
                this.props.text="3333333333333"
            }}>click-filho</button>
        </div>
    }
}

export default class App extends Component {
    state = {
        text:"11111111"
    }
  render() {
    return (
      <div>
          <button onClick={()=> {
            this.setState({
                text:222222
            })
          }}>click-pai</button>
        <Child text={this.state.text}/>
      </div>
    )
  }
}
