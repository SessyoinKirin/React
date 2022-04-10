import React, { Component } from 'react'

export default class App extends Component {
    a = 100
  render() {
    return (
      <div>
        <input />  
        <button onClick={ ()=>{
                console.log("click",this.a)
                // onMouseOver: apenas aproximando mouse
              //não é recomendado caso de muitos codigo dentro do comando
            }}>addone</button>
        <button onClick={  this.handleClicktwo.bind(this) }>addtwo</button>
        <button onClick={ this.handleClickthree }>addthree</button>
        <button onClick={ ()=>{ 
            this.handleClickfour()
            //recomendado
         }}>addfour</button>
      </div>
    )
  }
  handleClicktwo(){
    console.log("clicktwo",this.a)
  }

  handleClickthree = ()=>{
      console.log("clickthree",this.a)
      //quando usa ()=> pra sair this.a nao precisar por bind nem outro
  }
  handleClickfour = ()=>{
      console.log("clickfour",this.a)
  }
}
/**
 * call 
 * apply
 * bind
 * 
 */

//react nao linka evento em cada <>, e sim o modelo

var obj1 = {
    name:"obj1",
    getName(){
        console.log(this.name)
    }
}

var obj2 = {
    name:"obj2",
    getName(){
        console.log(this.name)
    }
}
obj1.getName.call(obj2)
//.call e .apply muda forçada o conteudo sem (), executa automaticamente
obj2.getName.apply(obj1)
//bind muda conteudo this mas precisa comando a executar
