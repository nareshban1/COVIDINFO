import React, { useEffect, useState } from "react";
import { getCasesByCountry } from "../../service/api";
import { CasesCard } from "../CasesCard/CasesCard";
import Chart from "../Chart/Chart";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/react";
import Select from "react-select";
import "./Country.css";

function Country() {
  const [countryData, setCountryData] = useState([]);
  const [countryName, setCountryName] = useState("Select");
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    getCasesByCountry().then((data) => {
      setCountryData(data);
      setLoading(false);
    });
  };

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  const handleChange = (e) => {
    console.log(e.target.value);
    setCountryName(e.target.value);
  };

  let options = countryData.map((data) => {
    return { value: data.country, label: <><img className="flags" src={data.countryInfo.flag} alt=""/> {data.country} </>};
  });

  useEffect(() => {
    getData();
    setInterval(getData, 1800000);
  }, []);

  const handleSelect = (item) => {
    setCountryName(item);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #BCE4E3',
      backgroundColor: state.isSelected ? '#BCE4E3' : "none",
      color: state.isSelected ? '#4E5B7B' : "black",
      padding: 5,
    }),}

  return (
    <div className="country">
      <div className="todayHeader">
        <div>
          <h1>View COVID-19 data by Country</h1>
        </div>
        <h5>Data from yesterday</h5>
      </div>
      {loading ? (
        <div className="loading">
          {" "}
          <BeatLoader loading={loading} css={override} color={"#6275CC"} />{" "}
        </div>
      ) : (
        <>
          {/* <select onChange={handleChange}>
                    <option >Select a Country</option>
                {countryData ? 
                <>
                    {countryData.map(data => (
                        
                        <option key={data.country} > {data.country} </option>
                        
                    ))}
                
                </>:<><option disabled >Country Names</option></>}
            </select> */}
          <Select
            value={countryName}
            onChange={handleSelect}
            options={options}
            styles={customStyles}
          />

          <div className="countryData">
            {countryData ? (
              <>
                {countryData
                  .filter(
                    (country) => country.country === `${countryName.value}`
                  )
                  .map((selected) => (
                    <div className="initialData" key={countryName}>
                      <div className="chart">
                        <Chart
                          cases={selected.todayCases}
                          deaths={selected.todayDeaths}
                          recovered={selected.todayRecovered}
                          day={"Yesterdays"}
                        />
                      </div>
                      <div className="otherData">
                        <div className="casesGrid">
                          <CasesCard
                            title={"Total Cases"}
                            data={selected.cases}
                            backgroundColor={"#b9b2dc"}
                          />
                          <CasesCard
                            title={"Total Recovered"}
                            data={selected.recovered}
                            backgroundColor={"#BCE4E3"}
                          />
                          <CasesCard
                            title={"Total Deaths"}
                            data={selected.deaths}
                            backgroundColor={"#F08DA9"}
                          />
                          <CasesCard
                            title={"Active Cases"}
                            data={selected.active}
                            backgroundColor={"#FEE3B8"}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
      <div></div>
    </div>
  );
}

export default Country;
