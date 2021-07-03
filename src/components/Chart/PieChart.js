
import React from 'react'
import {  Doughnut } from 'react-chartjs-2';


function PieChart({cases, deaths, recovered,day,title}) {

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
        },
        title: {
          display: true,
          text: `COVID-19 data for ${title}`,
          font:{
            family:'josefin sans',
            size:'25px'
          }
        },
    }
  }
    
    return (
        
        <>  
            <Doughnut data={value} options={options} /> 
        </>

    )
}

export default PieChart



