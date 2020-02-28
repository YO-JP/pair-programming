import React from 'react';
import axios from 'axios';

import StockOne from '.././component/StockOne/StockOne.js'
import Chart from '.././component/Chart/Chart.js'
import './Main.scss';



class Main extends React.Component {
    constructor(props) {
        super(props);
          this.state={
              stockOne: []
          };    
    }

    componentDidMount(){
        axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line')
            .then(res=> 
                {this.setState({stockOne:res.data.historical},()=>{
                console.log(this.state.stockOne);
                })
            })

            
    }


    render() {
        return (
            <section className='main__section'>
                <StockOne stockOne={this.state.stockOne}/>
                <Chart />
            </section>
        )
    }
}

export default Main;
