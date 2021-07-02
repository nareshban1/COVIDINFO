import React from 'react'
import Country from '../../components/Country/Country'
import Initial from '../../components/InitialPage/Initial'
import "./Home.css"

function Home() {
    return (
        <section className="home">
            <div className="container">
                <Initial/>
                <Country />
            </div>
        </section>
        
    )
}

export default Home

