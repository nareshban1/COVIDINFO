

export const getCases= ()=>{
    return fetch('https://disease.sh/v3/covid-19/all')
    .then((response) => response.json())
}


export const getCasesByCountry= ()=>{
    return fetch('https://disease.sh/v3/covid-19/countries?yesterday=true')
    .then((response) => response.json())
}

export const getHistory= (days)=>{
    return fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=${days}`)
    .then((response) => response.json())
}

export const getHistoryCountry= (days,country)=>{
    return fetch(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=${days}`)
    .then((response) => response.json())
}

