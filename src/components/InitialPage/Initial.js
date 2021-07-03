import React, { useEffect, useState } from "react";
import { getCases } from "../../service/api";
import {CasesCard} from "../CasesCard/CasesCard";
import PieChart from "../Chart/PieChart";
import "./initial.css";
import {BeatLoader} from"react-spinners";
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  
`;

function Initial(props) {
  const [cov, setCov] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = () =>{
    getCases().then((data) => {
      setCov(data);
      setLoading(false);
      
    });
  }

  useEffect(() => {
    getData();
    setInterval(getData, 1800000);
    
  }, []);
 
  
  return (
    <>
      
    <div className="todayData">
                <div className="todayHeader">
                    <div>
                    <h1>COVID-19 Coronavirus Pandemic Update</h1>
                    <p>Updated every 30 minutes</p>
                    </div>
                    {cov ?
                    <h5>Last Updated At: {new Date(cov.updated).toDateString()} </h5> :<></>}
                </div>
      {loading ? (
        <>
          <div className="loading"> <BeatLoader loading={loading} css={override} color={"#6275CC"} /></div>
        </>
      ) : (
        <>
          {cov ? (
            <div className="initialData">
              
               
              <div className="chart">
                <PieChart
                  cases={cov.todayCases}
                  deaths={cov.todayDeaths}
                  recovered={cov.todayRecovered}
                  day={"Todays"}
                  title={"Today"}
                />
              </div>
              <div className="otherData">
                <div className="casesGrid">
                    <CasesCard title={"Total Cases"} data={cov.cases} backgroundColor={"#b9b2dc"}/>
                    <CasesCard title={"Total Recovered"} data={cov.recovered} backgroundColor={"#BCE4E3"}/>
                    <CasesCard title={"Total Deaths"} data={cov.deaths} backgroundColor={"#F08DA9"}/>
                    <CasesCard title={"Active Cases"} data={cov.active} backgroundColor={"#FEE3B8"}/>
                </div>
              </div>
            </div>
            
          ) : (
            <></>
          )}
        </>
      )}
      </div>
    </>
  );
}

export default Initial;
