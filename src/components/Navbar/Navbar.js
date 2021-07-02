import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (
        <nav className="navcontainer">
            <div className="container navbar">
                <h1>COVID<span style={{'color':'#2E5894'}}>INFO</span></h1>
            </div> 
        </nav>
    )
}

export default Navbar
