import React from 'react';
import './Result.scss'

class Result extends React.Component {
    render(){
        return (
            <div className = "result">
                <h2>RESULT...</h2>
                <div className="result__div">
                <h4>Profit</h4>
                <p>{Math.floor(this.props.profit)}</p>
                <h4>Cash</h4>
                <p>{Math.floor(this.props.cash)}</p>

                </div>
            </div>
        )
    }
}

export default Result