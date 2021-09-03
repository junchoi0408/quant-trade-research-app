import React from 'react';
import { Link } from 'react-router-dom';
import financeData from '../img/undraw_financial_data_es63.png';

function HomePg() {
    return(
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
        </section>
    )
}

export default HomePg;