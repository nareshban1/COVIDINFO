import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import "./Historical.css";
import { getHistory, getHistoryCountry } from "../../service/api";
import LineChart from "../Chart/LineChart";


function Historical(props) {

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [day, setDays] = useState("30");
  const [tempday, setTempDay] = useState("30");

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const getHistoricalData = (day) => {
    getHistory(day).then((data) => {
      setLoading(true);
      setHistory(data);
      setLoading(false);
    });
  };

  const getHistoricalCountryData = (day, country) => {
    getHistoryCountry(day, country).then((data) => {
      setLoading(true);
      setHistory(data.timeline);
      setLoading(false);
    });
  };


  const handleSet = () =>{
    setDays(tempday);
  }



  useEffect(() => {

    if (props.hasOwnProperty("countryName")) {
        console.log(props.countryName)
        getHistoricalCountryData(day, props.countryName);
    } else {
      getHistoricalData(day);
    }
  }, [day, props.countryName]);

  return (
    <>
      {loading ? (
        <div className="loading">
          {" "}
          <BeatLoader loading={loading} css={override} color={"#6275CC"} />{" "}
        </div>
      ) : (
        <>
          <div className="historicalData">
            <div className="inputDiv">
              <label
                className="inputlabel"
                htmlFor="number"
                style={{ color: "#4E5B7B" }}
              >
                Set Days
                <input
                  className="inputDays"
                  id="number"
                  type="number"
                  value={tempday}
                  onChange={(e) => setTempDay(e.target.value)}
                  min={10}
                  max={300}
                />
                
              </label>
              <button class="Setbtn" onClick={handleSet}>Set</button>
              
            </div>
            {history ? (
              <>
                <LineChart dataset={history} />
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Historical;
