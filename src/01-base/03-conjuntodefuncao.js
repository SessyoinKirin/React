import React from 'react'

class Child extends React.Component{
    render(){
        return (
            <div>
                Child
            </div>
        )
    }
}

class Navbar extends React.Component{
    render(){
        return (
            <div>
                Navbar
                <Child></Child>
            </div>
        )
    }
}

function Swiper(){
    return (
        <div>Swiper</div>
    )
}

const Tabbar = ()=><div>Tabbar</div>

class App extends React.Component{
    render(){
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}

export default App