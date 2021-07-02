
import React from 'react'
import {  Doughnut } from 'react-chartjs-2';


function Chart({cases, deaths, recovered,day}) {

    const value = {
        labels: [`${day} Cases`, `${day} Deaths`, `${day} Recovered `],
        datasets: [
          {
            label: 'Cases',
            data: [`${cases}`, `${deaths}`, `${recovered}`],
            borderWidth: 1,
            backgroundColor: [
                '#FEE3B8',
                '#F08DA9',
                '#A6DAE8',
              ],
          },
          
        ],
        
    };
        
  const options={
    plugins: {
        legend: {
            display: true,
            position:'bottom',
            labels: {
                usePointStyle:true,
                font:{
                  family:'josefin sans',
                  size:'16px'
                }
            }
        }
    }
  }
    
    return (
        
        <>  
            <Doughnut data={value} options={options} /> 
        </>

    )
}

export default Chart
