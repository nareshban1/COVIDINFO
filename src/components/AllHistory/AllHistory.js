import React,{useEffect, useState} from 'react'
import Historical from "../Historical/Historical";
import "./AllHistory.css";
function AllHistory() {
    useEffect(() => {
        
    }, [])

    return (
            <div className="history">
                <div className="todayHeader">
                    <div>
                    <h1>View World COVID-19 data History</h1>
                    </div>
                    <h5>Updated everyday</h5>
                </div>
                  <Historical/>
            </div>
        
    )
}

export default AllHistory
