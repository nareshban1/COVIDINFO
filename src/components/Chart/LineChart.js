import React,{useState,useEffect} from "react";
import { Line } from "react-chartjs-2";

function LineChart({dataset}) {

    const [cases, setCases] = useState([])
    const [deaths, setDeaths] = useState([])
    const [recovered, setRecovered] = useState([])
    let labeled =[]
    let viewlabeled =['Cases', 'Deaths', 'Recovered']
    let values =[];
    let date =[];


    const buildChartData = (data, casesType) => {
        
        const chartData = [];
        let lastDataPoint;
    
        for (let date in data.cases) {
            if (lastDataPoint) {
                const newDataPoint = {
                     value:data[casesType][date] - lastDataPoint
                }
                chartData.push(newDataPoint)
            }
            lastDataPoint = data[casesType][date];
        }
        return chartData;
    }

    Object.entries(dataset).map((data)=>{
        labeled.push(data[0]);
        values.push(data[1]);  
    })
    Object.entries(values[0]).map((data)=>{
        date.push(data[0]);
         
    })
    
   

    const getCases = () =>{
        let chartData = buildChartData(dataset,labeled[0]);
        chartData.map(data => {
            cases.push(data.value);
            
            
            
        });
    }
    const getDeaths = () =>{
        let chartData = buildChartData(dataset,labeled[1]);
        chartData.map(data => {
            deaths.push(data.value);
            
            
        });
       

    }

    const getRecovered = () =>{
        let chartData = buildChartData(dataset,labeled[2]);
        chartData.map(data => {
            recovered.push(data.value);
            
            
        });
        
    }

    useEffect(() => {
        getCases();
        getDeaths();
        getRecovered();
    }, [date])


   

  const data = {
    labels: date,
    datasets: [
      {
        label: viewlabeled[0],
        data: cases,
        fill: false,
        backgroundColor: "#FEE3B8",
        borderColor: "#FEE3B8",
      },
      {
        label: viewlabeled[2],
        data:recovered ,
        fill: false,
        backgroundColor: "#A6DAE8",
        borderColor: "#A6DAE8",
      },
      {
        label: viewlabeled[1],
        data:deaths ,
        fill: false,
        backgroundColor: "#F08DA9",
        borderColor: "#F08DA9",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle:true,
          font:{
            family:'josefin sans',
            size:'16px'
          }
      }
      },
      title: {
        display: true,
        text: 'COVID-19 History',
        font:{
          family:'josefin sans',
          size:'25px'
        }
      },
    
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
