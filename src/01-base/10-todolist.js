import React, { Component } from 'react'

export default class App extends Component {
    a = 100
    myref = React.createRef()

    state = {
        list: [
            {
                id:1,
                text:"111"
            },
            {
                id:2,
                text:"222"
            },
            {
                id:3,
                text:"333"
            }
        ]
    }
  render() {
    return (
      <div>
        <input ref={this.myref}/> 
        <button onClick={this.handleClick2}>add</button>
        <ul>
            {
                this.state.list.map((item,index)=>
                    <li key={item.id}>
                        {/* {item.text} */}
                        <span dangerouslySetInnerHTML={
                            {
                                __html:item.text
                            }
                        }></span>
                        {/* <button onClick={this.handelclick.bind(this,index)}>del</button> */}
                        <button onClick={()=>this.handelclick(index)}>del</button>
                    </li>
                )
            }
        </ul>
        {/* {this.state.list.length === 0?<div>Sem elementos</div>:null} */}

        {this.state.list.length ===0 && <div>Sem elementos</div>}

        
      </div>
    )
  }

  handleClick2=()=>{
      console.log("click",this.myref.current.value)

    //   this.state.list.push(this.myref.current.value)
        //nao recomenda isso, que modifica direto      

        let newlist = this.state.list.slice()
        newlist.push(
            {
                id:Math.random()*10000000000,
                text:this.myref.current.value
            }
        )
      this.setState({
          list:newlist
      })

      //zera input
      this.myref.current.value = ""
  }
  handelclick=(index)=>{
      console.log("Delete",index)
      let newlist = [...this.state.list]
        newlist.splice(index,1)
        this.setState({
            list:newlist
        })
  }
}