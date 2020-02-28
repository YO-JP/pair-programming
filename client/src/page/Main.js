import React from 'react';
import axios from 'axios';

import StockOne from '.././component/StockOne/StockOne.js'
import StockTwo from '.././component/StockTwo/StockTwo.js'
import StockThree from '.././component/StockThree/StockThree.js'
import StockFour from '.././component/StockFour/StockFour.js'
import StockFive from '.././component/StockFive/StockFive.js'

import Chart from '.././component/Chart/Chart.js'
import Result from '.././component/Result/Result.js'
import './Main.scss'



class Main extends React.Component {
    constructor(props) {
        super(props);
          this.state={
              stockOne: [],
              stockTwo: [],
              stockThree:[],
              stockFour:[],
              stockFive: [],
              totalOne: 0,
              Profit:0,
              Cash:1000
            };    
            this.handleSubmit = this.handleSubmit.bind(this);
        }

    handleSubmit = event => {
        event.preventDefault ();
        if (this.state.Cash > this.state.stockOne[111].close) {
        this.setState({totalOne: this.state.stockOne[111].close}, ()=> {
            console.log(this.state.totalOne)})
        this.setState({Cash: this.state.Cash - this.state.stockOne[111].close})
        }
        }
        
    
    handleAlternate = event => {
        event.preventDefault ();
        this.setState({Profit: this.state.Profit + this.state.stockOne[7669].close-this.state.stockOne[111].close} , () => {
            console.log(this.state.Profit)}
        )
        this.setState({totalOne: 0}, () => {
        console.log(this.state.totalOne)}
        )
        this.setState({Cash: this.state.Cash + this.state.stockOne[7669].close})
    }


    componentDidMount(){
        axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?serietype=line')
            .then(res=> 
                {this.setState({stockOne:res.data.historical},()=>{
                console.log(this.state.stockOne);
                })
            })
        axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/PFE?serietype=line')
            .then (res =>
                {this.setState({stockTwo:res.data.historical})
            })
        axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/GPS?serietype=line')
            .then (res =>
                {this.setState({stockThree:res.data.historical})
            })
        
        axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/XOM?serietype=line')
            .then(res =>
                {this.setState({stockFour:res.data.historical})
            })
        axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/BAC?serietype=line')
        .then (res =>
            {this.setState({stockFive:res.data.historical})
        })
    }


    render() {
        console.log(this.state.stockOne)
        return (
            <>
                <Chart />
                <div className = "main__div">
                <StockOne stockOne={this.state.stockOne} onSubmit={this.handleSubmit} handleAlternate={this.handleAlternate}/>
                <StockTwo stockTwo={this.state.stockTwo} onSubmit={this.handleSubmit} handleAlternate={this.handleAlternate}/>
                <StockThree stockThree={this.state.stockThree} onSubmit={this.handleSubmit} handleAlternate={this.handleAlternate}/>
                <StockFour stockFour={this.state.stockFour} onSubmit={this.handleSubmit} handleAlternate={this.handleAlternate}/>
                <StockFive stockFive={this.state.stockFive} onSubmit={this.handleSubmit} handleAlternate={this.handleAlternate}/>
                </div>
                <div className = "main__divTwo">
                <Result profit={this.state.Profit} cash={this.state.Cash}/>
                </div>
            </>
        )
    }
}

export default Main;
