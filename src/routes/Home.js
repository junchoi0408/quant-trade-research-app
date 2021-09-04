  
import React, { useState } from 'react';
import './Home.css';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import TradingViewWidget, { Themes, RangeTypes } from 'react-tradingview-widget';
import { Pagination } from '@material-ui/lab';
import TradesCard from '../components/home/TradesCard';
import FinancialData from '../components/home/FinancialData';

function Home({ isLoggedIn, finData }) {
    const [dataType, setDataType] = useState('Quote');

    const handleChange = (event) => {
        setDataType(event.target.value);
    };

    return(
        <>
        { isLoggedIn && finData ? 
            <section className="home">
                <div className="home__signed__container bd-grid" >
                    <div className="chart__financials__container">
                        <div className="chart__container">
                            <span className="stock__title">{finData.description}</span><br/>
                            <span className="stock__title__symbol">{finData.exchange}:{finData.symbol}</span><br/>
                            <div className="chart">
                                <TradingViewWidget symbol={`${finData.exchange}:${finData.symbol}`} theme={Themes.LIGHT}
                                    range={RangeTypes.YTD}
                                    locale="en"
                                    autosize
                                    styles={{height: '300px'}}/>
                                <span>{finData.symbol} Chart by Trading View</span>
                            </div>
                        </div>
                        <div className="financials__container">
                        <form noValidate autoComplete="off">
                            <TextField
                                    id="outlined-select-financials"
                                    select
                                    label="Financials"
                                    value={dataType}
                                    onChange={handleChange}
                                    variant="outlined"
                                >
                                    <MenuItem value="Quote">Quote</MenuItem>
                                    <MenuItem value="Key Ratios">Key Ratios</MenuItem>
                                    <MenuItem value="Dividend">Dividend</MenuItem>
                                </TextField>
                        </form>
                            <div className="financials__data__container">
                                <FinancialData dataType={dataType} finData={finData}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="company__profile__container container__divider">
                        <h2>Company Profile</h2>
                        <div>
                            <span>Business Description</span>
                            <p>...</p>
                        </div>
                        <div>
                            <span>Contact</span>
                            <p>...</p>
                        </div>
                        <div>
                            <span>Sector</span>
                            <span>Industry</span>
                            <span>Most Recent Earnings</span>
                            <span>Fiscal Year Ened</span>
                            <span>Stock Type</span>
                            <span>Employees</span>
                        </div>
                    </div>
                    <div className="recent__trades__container container__divider">
                        <h2>Recent Trades</h2>
                        <div className="trades__container">
                            <TradesCard />
                            <TradesCard />
                        </div>
                        <div className="pagination">
                            <Pagination count={10} shape="rounded"/>
                        </div>
                        
                    </div>
                </div>      
            </section>
            :
            <div>
                Loading...
            </div>
            }
        </>
    )
}

export default Home;