import React from "react";
import { Pagination, Rating } from "@material-ui/lab";
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TradesCard from "../components/home/TradesCard";
import stockChart from '../img/stockExample.PNG';
import './Research.css';

function Research({ finData }) {
    
    const labels = {
        0.5: 'Very Risky',
        1: 'Very Risky',
        1.5: 'Risky',
        2: 'Risky',
        2.5: 'Okay',
        3: 'Okay',
        3.5: 'Okay',
        4: 'Good',
        4.5: 'Good',
        5: 'Excellent',
        };
    
    const useStyles = makeStyles({
    riskRating: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1em',
    },
    });

    const [value, setValue] = React.useState(2.5);
    const classes = useStyles();

    return (
        <>
        { finData ? <div className="research__container bd-grid">
            <div className="research__header">
                <span className="stock__title">AMC Entertainment Holdings Inc. (NYSE: AMC)</span><br/>
                <span className="stock__title__symbol">August 31, 2021 11:52PM EST</span><br/>
            </div>
            <div className="research__technical__analysis container__divider">
                <h3>Technical Analysis</h3>
                <div>
                    <div style={{display:'inline-block', backgroundColor: 'grey', borderRadius:'10px', padding: '5px', color: '#fff', margin: "0 0.5em 0.5em 0"}}>MACD Golden Cross</div>
                    <div style={{display:'inline-block', backgroundColor: 'grey', borderRadius:'10px', padding: '5px', color: '#fff', margin: "0 0.5em 0.5em 0"}}>Bullish Pennant</div>
                    <div style={{display:'inline-block', backgroundColor: 'grey', borderRadius:'10px', padding: '5px', color: '#fff', margin: "0 0.5em 0.5em 0"}}>Reverse Head&Shoulder</div>
                </div>
                <div>
                    <p>Entry: $22</p>
                    <p>Price Target: $22</p>
                    <p>Exit: $22</p>
                    <p>SL: $22</p>
                    <p>Profit: $500 (+50%)</p>
                    <p>Risk-to-Reward Ratio: 1:2</p>
                </div>
                <img style={{height: '300px', width:'343px'}} src={stockChart} alt="amc chart"/>
            </div>
            <div className="research__risk container__divider">
                <h3>Risk Analysis</h3>
                <div className={classes.riskRating}>
                    <Rating name="rating-read" size="small" defaultValue={2.5} precision={0.5} icon={<StarIcon style={{color: '#000'}}/>} emptyIcon={<StarIcon style={{opacity: 0.55}}/>}  readOnly />
                    {value !== null && <Box ml={2}>{labels[value]}</Box>}
                </div>
                <span>Comment:</span>
                <p>
                    Based on xyz trading strategy, it passed 3 out of 5 our buying qualification test. Expected term of holding is xyz days, risk to reward ratio 1 to 3, and P/L of $200 (~20%).
                </p>
            </div>
            <div className="research__history container__divider">
                <h3 className="history__title">History</h3>
                <div className="trades__container">
                    <TradesCard />
                    <TradesCard />
                </div>
                <Pagination count={10} shape="rounded"/>
            </div>
        </div> :
        <div>
        Loading...
        </div>
    }
    </>
    )
}

export default Research;