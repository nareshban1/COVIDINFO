import React,{useEffect, useState} from 'react'
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import "./Historical.css";
import { getHistory } from '../../service/api';
import LineChart from '../Chart/LineChart';
function Historical() {
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(true);
    const [day, setDays] = useState("30");
   
    const override = css`
    display: block;
    margin: 0 auto;
  `;



    const getHistoricalData =(day) => {
        getHistory(day).then((data) => {
            setHistory(data);
            setLoading(false);
        })
    }   


    useEffect(() => {
        getHistoricalData(day);
    }, [day])
    return (
            <div className="history">
                <div className="todayHeader">
                    <div>
                    <h1>View COVID-19 data History</h1>
                    </div>
                    <h5>Updated everyday</h5>
                </div>
                {loading ? <div className="loading">
          {" "}
          <BeatLoader loading={loading} css={override} color={"#6275CC"} />{" "}
            </div>:<>
                <div className="historicalData">
                    <div className="inputDiv">
                    <label className="inputlabel" htmlFor="number" style={{"color": "#4E5B7B"}} >Set Days 
                    <input className="inputDays" id="number" type="number" value={day} onChange={(e) => setDays(e.target.value)} min={10} max={300} /></label></div>
                    {history? <>
                         <LineChart dataset={history} /> 
                    </>:<></>}
                </div>
                </>
                }
            </div>
        
    )
}

export default Historical
