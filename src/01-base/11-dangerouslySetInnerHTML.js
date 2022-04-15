import React, { Component } from 'react'

export default class App extends Component {

    state = {
        text: '<strong>88555558</strong>'
    }

  render() {
    return (
        <div>
            <span dangerouslySetInnerHTML={
                {
                    __html:this.state.text
                }
            }>

            </span>
        </div>
    )
  }
}
