import React from 'react';
import './TradesCard.css';

function TradesCard() {
    return(
        <div className="trades">
            <h3>8/30/21</h3>
            <div className="trades__child">     
                <p>ENTRY: $22</p>
                <p>PT: $22</p>
                <p>EXIT: $22</p>
                <p>SL: $22</p>
                <p>Profit: $500(+50%)</p>
            </div>
        </div>
    )
}

export default TradesCard;