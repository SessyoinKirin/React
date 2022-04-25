import React, { Component } from 'react'
import PropType from 'prop-types'

export default class Navbar extends Component {
    state = {
        //apenas usavel por si, por fora nao consegue mexer
    }
    //propriedade veio do herdou, this.props

    //verificação de função:
static propTypes = {
  title: PropType.string,
    leftshow: PropType.bool
}
  render() {
    //   console.log(this.props)
      let{title, leftshow} = this.props
    return (
      <div>
          {leftshow && <button>voltar</button>}
          Navbar-{title}
          <button>home</button>
      </div>
    )
  }
}

class Test {
  a =1
  static a = 100
}
// Test.a = 100
var obj = new Test();
console.log(obj.a)
console.log(Test.a)