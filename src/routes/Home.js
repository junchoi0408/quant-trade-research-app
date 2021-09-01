  
import React from 'react';
import financeData from '../img/undraw_financial_data_es63.png';
import { Link } from 'react-router-dom';
import './Home.css';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import TradingViewWidget, { Themes, RangeTypes } from 'react-tradingview-widget';
import { Pagination } from '@material-ui/lab';
import TradesCard from '../components/home/TradesCard';

function Home({ isLoggedIn }) {
    const [dataType, setDataType] = React.useState('Quote');

    const handleChange = (event) => {
        setDataType(event.target.value);
    };

    return(
        <>
            { isLoggedIn ? 
            <section className="home">
                <div className="home__signed__container bd-grid" >
                    <div className="header__home__container">
                        <span className="stock__title">AMC Entertainment Holdings Inc.</span><br/>
                        <span className="stock__title__symbol">NYSE:AMC</span><br/>
                        
                    </div>
                    <div className="chart__financials__container container__divider">
                        <div className="chart__container">
                            <span>AMC Entertainment Holdings Inc Class A</span><br/>
                            <span className="stock__title__symbol">NYSE:AMC</span><br/>
                            <TradingViewWidget symbol="NYSE:AMC" theme={Themes.LIGHT}
                                range={RangeTypes.YTD}
                                locale="en"
                                autosize/>
                            <span>AMC Chart by Trading View</span>
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
                                    <MenuItem value="Short Interest">Short Interest</MenuItem>
                                </TextField>
                        </form>
                            <div className="financials__data__container">
                                {[{name:"Bid/Size", number:"40.90"},{name:"Bid/Size", number:"40.90"},{name:"Bid/Size", number:"40.90"},{name:"Bid/Size", number:"40.90"},{name:"Bid/Size", number:"40.90"},{name:"Bid/Size", number:"40.90"},{name:"Bid/Size", number:"40.90"},{name:"Bid/Size", number:"40.90"},{name:"Bid/Size", number:"40.90"}].map((obj, index)=>{
                                    return (
                                        <div className="financials__grid__child" key={index}>
                                            <span>{obj.name}</span><br/>
                                            <span>{obj.number}</span><br/>
                                        </div>)
                                })}
                                {/* create a component to determine which component should be renderdered based on the selected value */}
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
                        
                        <Pagination count={10} shape="rounded"/>
                    </div>
                </div>      
                
                
            </section>
            :
            <section className="home">
                <div className="home__container">
                    <div className="home__img">
                        <img src={financeData} alt="data log" />
                    </div>

                    <div className="home__data">
                        <h1 className="home__title">Quant-based<br/> Trading & Investing</h1>
                        <p className="home__description">Upgrade investing by analyzing <br/> data and using modern technology.</p>
                        <Link to="/auth" className="home__button">Get Started</Link>
                    </div>
                </div>
            </section>}
        </>
    )
}

export default Home;