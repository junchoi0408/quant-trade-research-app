import React from 'react';

function FinancialData({ finData }) {
    const quote = [
        {name:"Beta", number:Math.round((finData.fundamental.beta + Number.EPSILON)* 100)/100},
        {name:"High 52", number:'$' + finData.fundamental.high52},
        {name:"Low 52", number:'$' + finData.fundamental.low52},
        {name:"Dividend", number:'$'+ finData.fundamental.dividendAmount},
        {name:"Market Cap (in millions)", number:finData.fundamental.marketCap.toLocaleString()},
        {name:"Shares Outstanding", number:finData.fundamental.sharesOutstanding.toLocaleString()},
        {name:"Vol 1D", number:finData.fundamental.vol1DayAvg.toLocaleString()},
        {name:"Vol 10D", number:finData.fundamental.vol10DayAvg.toLocaleString()},
        {name:"Vol 3M", number:finData.fundamental.vol3MonthAvg.toLocaleString()},
    ];    
    const keyRatios = [];
    const shortInterest = [];

    return(
        <>
        {quote.map((obj, index)=>{
            return (
                <div className="financials__grid__child" key={index}>
                    <span>{obj.name}</span><br/>
                    <span>{obj.number}</span><br/>
                </div>)
        })}
        </>
    )
}

export default FinancialData;