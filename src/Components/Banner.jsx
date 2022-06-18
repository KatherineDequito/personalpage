import React, { Component } from 'react'
import logo from '../Components/public/image/cat.jpg';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">
                    <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                    <h1> Hi! I'm Kath! Nice metting you! </h1>
                    <p id="paragarph1"> Student </p>
                    
            </section>
        )
    }
}

export default Banner


