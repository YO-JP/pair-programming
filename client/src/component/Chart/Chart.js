import React from 'react';
import ChartOne from '.././ChartIndividual/ChartOne.js';
import ChartTwo from '.././ChartIndividual/ChartTwo.js';
import ChartThree from '.././ChartIndividual/ChartThree';
import ChartFour from '.././ChartIndividual/ChartFour';
import ChartFive from '.././ChartIndividual/ChartFive';
import './Chart.scss'

class Chart extends React.Component {
    state ={
        visible:false,
        message: ''
    }

    render(){

        return (
            <div className="chart">
                <button className = "chart__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>
                     {this.state.visible ? 
                    'HIDE ANSWER'
                    :
                    'SHOW ANSWER!'
                    }
                </button>
                {this.state.visible ? <ChartOne /> : null}
                {this.state.visible ?<ChartTwo /> : null}
                {this.state.visible ?<ChartThree /> : null}
                {this.state.visible ?<ChartFour /> : null}
                {this.state.visible ?<ChartFive /> : null}
    
            </div>
        )
    }
}

export default Chart;