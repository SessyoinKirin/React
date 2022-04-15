import React, { Component } from 'react'
import './css/02-vendadeassento.css'
import Film from './meuassentoComponent/Film'
import Cinema from './meuassentoComponent/Cinema'
import Center from './meuassentoComponent/Center'
export default class App extends Component {

    state = {
        list:[
            {
                id: 1,
                text:"filme"
            },
            {
                id: 2,
                text:"cinema"
            },
            {
                id: 3,
                text:"eu"
            },
        ],
        current:0
    }
    which(){
        switch(this.state.current){
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null
        }
    }
  render() {
    return (
      <div>

          {/* {
              this.state.current === 0 && <Film></Film>
          }
          {this.state.current === 1 && <Cinema></Cinema>}
          {this.state.current === 2 && <Center></Center>} */}

          {
              this.which()
          }
          <ul>
              {
                  this.state.list.map((item,index)=>
                    <li key={item.id} className={ this.state.current === index?'active':''} onClick={()=>this.handleclick(index)}>{item.text}</li>
                    )
              }
          </ul>
      </div>
    )
  }

  handleclick(index){
      console.log(index)

      this.setState({
          current:index
      })
  }
}
