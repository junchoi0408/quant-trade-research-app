import React from 'react';

function FinancialData({ dataType, finData }) {
    const data = {
        "Quote": [
            {name:"Beta", number:Math.round((finData.fundamental.beta + Number.EPSILON)* 100)/100},
            {name:"High 52", number:'$' + finData.fundamental.high52},
            {name:"Low 52", number:'$' + finData.fundamental.low52},
            {name:"Dividend", number:'$'+ finData.fundamental.dividendAmount},
            {name:"Market Cap (in mil)", number:finData.fundamental.marketCap.toLocaleString()},
            {name:"Shares Outstanding", number:finData.fundamental.sharesOutstanding.toLocaleString()},
            {name:"Vol 1D", number:finData.fundamental.vol1DayAvg.toLocaleString()},
            {name:"Vol 10D", number:finData.fundamental.vol10DayAvg.toLocaleString()},
            {name:"Vol 3M", number:finData.fundamental.vol3MonthAvg.toLocaleString()},
        ],
        "Key Ratios":[
            {name:"P/B Ratio", number:Math.round((finData.fundamental.pbRatio + Number.EPSILON)* 100)/100},
            {name:"P/E Ratio", number:Math.round((finData.fundamental.peRatio + Number.EPSILON)* 100)/100},
            {name:"P/CF Ratio", number:Math.round((finData.fundamental.pcfRatio + Number.EPSILON)* 100)/100},
            {name:"ROE", number:Math.round((finData.fundamental.returnOnEquity + Number.EPSILON)* 100)/100},
            {name:"ROA", number:Math.round((finData.fundamental.returnOnAssets + Number.EPSILON)* 100)/100},
            {name:"ROI", number:Math.round((finData.fundamental.returnOnInvestment + Number.EPSILON)* 100)/100},
            {name:"Net Profit Margin TTM", number:Math.round((finData.fundamental.netProfitMarginTTM + Number.EPSILON)* 100)/100},
            {name:"Operating Margin TTM", number:Math.round((finData.fundamental.operatingMarginTTM + Number.EPSILON)* 100)/100},
            {name:"Debt-to-Equity", number:Math.round((finData.fundamental.totalDebtToEquity + Number.EPSILON)* 100)/100},
        ],
        "Dividend":[
            {name:"Dividend Amount", number:finData.fundamental.dividendPayAmount},
            {name:"Dividend Yield", number:finData.fundamental.dividendYield},
            {name:"Dividend Date", number:finData.fundamental.dividendPayDate},
        ]
    }

    return(
        <>
            {data[dataType].map((obj,index)=>{
                return(
                    <div className="financials__grid__child" key={index}>
                        <span>{obj.name}</span><br/>
                        <span>{obj.number}</span><br/>
                    </div>
                )
            })}
            
        </>
    )
}

export default FinancialData;