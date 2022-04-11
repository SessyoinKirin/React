import React, { Component } from 'react'

export default class App extends Component {
    a =1
    // state = {
    //     text:"favorito",
    //     myShow:true
    // }
    // outro jeito de setar estado:
    constructor(){
        super()
        this.state = {
            text:"favorito",
            myShow: true,
            myName: "Billy"
        }
    }

  render() {
    return (
      <div>
          <h1>Seja Bem vindo ao React - {this.state.myName}</h1>
          <button onClick={()=>{
              this.setState({
                //   text:"cancela"
                myShow:!this.state.myShow,
                myName: "Kazuya"
              })

              if(this.state.myShow){
                  console.log("favoritar com sucesso")
              }else{
                  console.log("cancelado com sucesso")
              }
          }}>{this.state.myShow?"favorito":"cancelar"}</button>
      </div>
    )
  }
}
