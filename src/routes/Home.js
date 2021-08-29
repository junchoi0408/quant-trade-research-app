  
import React from 'react';
import financeData from '../img/undraw_financial_data_es63.png';
import { Link } from 'react-router-dom';
import './Home.css';
import Slider from '../components/home/Slider';

function Home({ isLoggedIn }) {

    return(
        <>
            { isLoggedIn ? 
            <section className="home">
                <div className="home__signed__container bd-grid" >
                    <div className="header__home__container">
                        <span>AMC Entertainment Holdings Inc Class A</span><br/>
                        <span>AMC</span><br/>
                        <span>Rating as of Aug 27, 2021</span>
                    </div>
                    <div className="slider__container">
                        <Slider />
                    </div>
                    <div className="chart__financials__container">
                        <div className="chart__container">
                            <span>AMC Entertainment Holdings Inc Class A</span><br/>
                            <span>AMC</span><br/>
                            Chart
                        </div>
                        <div className="financials__container">
                            <span>Financials</span>
                        </div>
                    </div>
                    
                    <div className="company__profile__container">

                    </div>
                    <div className="recent__trades__container">
                        <Slider />
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