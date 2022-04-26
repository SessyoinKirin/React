import React from 'react'

export default function Sidebar (props) {
    //funcao n tem this...
    //console.log(props)
    let {bg, position} = props
    console.log(position)

    var obj = {
        left:0
    }
    var obj2 = {
        right:0
    }
    var obj3 = {
        background:bg,
         width:"200px", 
         position:"fixed"
    }
    var styleobj = position === "left"?{...obj3, ...obj}:{...obj3, ...obj2}
    
  return (
    <div style={styleobj}>
        <ul>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
        </ul>
    </div>
  )
}
