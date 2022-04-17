import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

  constructor(){
    super()

    //solicita informacao de axios: especial em solicitar dados
    // axios.get("Solicita").then(res=>{}).catch(err=>{console.log(err)})

    // axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159").then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
      method:"get",
      headers:{
        'X-Client-info': '{"a":"3000", "ch":"1002", "v":"5.0.4", "e":"16395416565231270166529", "bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=>{
      console.log(res.data)
    })
  }

  render() {

    return (
      <div>
          Cinema componente
      </div>
    )
  }
}
