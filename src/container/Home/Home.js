import React from 'react'
import AllHistory from '../../components/AllHistory/AllHistory'
import Country from '../../components/Country/Country'
import Initial from '../../components/InitialPage/Initial'
import "./Home.css"

function Home() {
    return (
        <section className="home">
            <div className="container">
                <Initial/>
                <Country />
                <AllHistory/>
                
            </div>
        </section>
        
    )
}

export default Home

