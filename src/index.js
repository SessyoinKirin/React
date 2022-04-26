import React from 'react'
//从react的包当中引入了React。只要你要写react.js组件就必须引入React，因为react里有一种语法叫jsx
import ReactDom from 'react-dom'
//ReactDom可以帮助我们把React组件熏染到页面上去
import App from './01-base/17-componenteFuncaoProps'


// ReactDom.render(<div>
//     <b>111111111212</b>
//     <ul>
//         <li>12313</li> 
//         <li>12313</li> 
//         <li>12313</li> 
//         <li>12313</li> 
//         <li>12313</li> 
//         <li>12313</li> 
//     </ul>
//     </div>, document.getElementById("root"))

// ReactDom.render(React.createElement("div",{
//     id:"aaa",
//     class:"bbb"
// },"11111111"),document.getElementById("root"))

ReactDom.render(
    // <React.StrictMode>
        <App/>
    // </React.StrictMode>
    ,document.getElementById("root"))

//Entre <App> está React.StrictMode, mas tem b.o


/* 
jsx = js + xml
*/