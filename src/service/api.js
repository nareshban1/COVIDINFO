

export const getCases= ()=>{
    return fetch('https://disease.sh/v3/covid-19/all')
    .then((response) => response.json())
}


export const getCasesByCountry= ()=>{
    return fetch('https://disease.sh/v3/covid-19/countries?yesterday=true')
    .then((response) => response.json())
}
