import React from 'react'
import"./CaseCard.css"

export const CasesCard = ({title,data,backgroundColor}) => {
    return (
        <div className="casesCard" style={{ "backgroundColor":`${backgroundColor}`}}>
            <h1 className="caseTitle">{title}</h1>
            <h2 className="caseData"  >{data}</h2>
        </div>
    )
}


