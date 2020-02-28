import React from 'react';

import ChartOne from '.././ChartIndividual/ChartOne.js';
import './Chart.scss'

class Chart extends React.Component {
    state ={
        visible:false
    }
    render(){
        return (
            <div className="chart">
                <button className = "chart__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>CLICK ME!</button>
                {this.state.visible ? <ChartOne /> : null}
    
            </div>
        )
    }
}

export default Chart