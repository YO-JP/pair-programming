import React from 'react';
import axios from 'axios';

import StockOne from '.././component/StockOne/StockOne.js'
import StockTwo from '.././component/StockTwo/StockTwo.js'
import StockThree from '.././component/StockThree/StockThree.js'
import StockFour from '.././component/StockFour/StockFour.js'
import StockFive from '.././component/StockFive/StockFive.js'
import YouRock from '.././component/Result/YouRock.js'

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
              Cash:20,
              countOne: 0,
              countTwo: 0,
              countThree:0,
              countFour:0,
              countFive:0
            };    
            this.handleSubmit = this.handleSubmit.bind(this);
        }

    handleSubmit = event => {
        event.preventDefault ();
        if (this.state.Cash > this.state.stockOne[111].close) {
        this.setState({totalOne: this.state.stockOne[111].close}, ()=> {
            console.log(this.state.totalOne)})
        this.setState({Cash: this.state.Cash - this.state.stockOne[111].close})
        this.setState({countOne:this.state.countOne +1})
        }
        }
        
    
    handleAlternate = event => {
        if (this.state.countOne){
        event.preventDefault ();
        this.setState({Profit: this.state.Profit + this.state.stockOne[7669].close-this.state.stockOne[111].close} , () => {
            console.log(this.state.Profit)}
        )
        this.setState({totalOne: 0}, () => {
        console.log(this.state.totalOne)}
        )
        this.setState({Cash: this.state.Cash + this.state.stockOne[7669].close})
        this.setState({countOne:this.state.countOne-1})
        } else {
            alert('No more to sell')
        }
    }

    handleSubmitTwo = event => {
        event.preventDefault ();
        if (this.state.Cash > this.state.stockTwo[111].close) {
        this.setState({totalTwo: this.state.stockTwo[111].close}, ()=> {
            console.log(this.state.totalTwo)})
        this.setState({Cash: this.state.Cash - this.state.stockTwo[111].close})
        this.setState({countTwo:this.state.countTwo +1})
        }
        }
        
    
    handleAlternateTwo = event => {
        event.preventDefault ();
        if (this.state.countTwo >0){
        this.setState({Profit: this.state.Profit + this.state.stockTwo[7669].close-this.state.stockTwo[111].close} , () => {
            console.log(this.state.Profit)}
        )
        this.setState({totalTwo: 0}, () => {
        console.log(this.state.totalTwo)}
        )
        this.setState({Cash: this.state.Cash + this.state.stockTwo[7669].close})
        this.setState({countTwo:this.state.countTwo-1})
        } else {
            alert ('No more to sell')
        }
    }

    handleSubmitThree = event => {
        event.preventDefault ();
        if (this.state.Cash > this.state.stockThree[111].close) {
        this.setState({totalThree: this.state.stockThree[111].close}, ()=> {
            console.log(this.state.totalThree)})
        this.setState({Cash: this.state.Cash - this.state.stockThree[111].close})
        this.setState({countThree:this.state.countThree +1})
        }
        }
        
    
    handleAlternateThree = event => {
        event.preventDefault ();
        if (this.state.countThree >0){
        this.setState({Profit: this.state.Profit + this.state.stockThree[7669].close-this.state.stockThree[111].close} , () => {
            console.log(this.state.Profit)}
        )
        this.setState({totalThree: 0}, () => {
        console.log(this.state.totalThree)}
        )
        this.setState({Cash: this.state.Cash + this.state.stockThree[7669].close})
        this.setState({countThree:this.state.countThree-1})
        } else {
            alert ('No more to sell')
        }
    }

    handleSubmitFour = event => {
        event.preventDefault ();
        if (this.state.Cash > this.state.stockFour[111].close) {
        this.setState({totalFour: this.state.stockFour[111].close}, ()=> {
            console.log(this.state.totalFour)})
        this.setState({Cash: this.state.Cash - this.state.stockFour[111].close})
        this.setState({countFour:this.state.countFour +1})
        }
        }
        
    
    handleAlternateFour = event => {
        event.preventDefault ();
        if (this.state.countFour >0){
        this.setState({Profit: this.state.Profit + this.state.stockFour[7669].close-this.state.stockFour[111].close} , () => {
            console.log(this.state.Profit)}
        )
        this.setState({totalFour: 0}, () => {
        console.log(this.state.totalFour)}
        )
        this.setState({Cash: this.state.Cash + this.state.stockFour[7669].close})
        this.setState({countFour:this.state.countFour-1})
        } else {
            alert ('No more to sell')
        }
    }

    handleSubmitFive = event => {
        event.preventDefault ();
        if (this.state.Cash > this.state.stockFive[111].close) {
        this.setState({totalFive: this.state.stockFive[111].close}, ()=> {
            console.log(this.state.totalFive)})
        this.setState({Cash: this.state.Cash - this.state.stockFive[111].close})
        this.setState({countFive:this.state.countFive +1})
        }
        }
        
    
    handleAlternateFive = event => {
        event.preventDefault ();
        if (this.state.countFive>0){
        this.setState({Profit: this.state.Profit + this.state.stockFive[7669].close-this.state.stockFive[111].close} , () => {
            console.log(this.state.Profit)}
        )
        this.setState({totalFive: 0}, () => {
        console.log(this.state.totalFive)}
        )
        this.setState({Cash: this.state.Cash + this.state.stockFive[7669].close})
        this.setState({countFive:this.state.countFive-1})
        } else{
            alert ('No more to sell')
        }
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
            <section className="main">
                <Chart />
                <p className='main__para'>You are a 10 YEAR OLD kid in YEAR 2000. </p>
                <p className='main__para'>Your loving parents gave you $20 to invest in the Stock Market.</p>
                <p className='main__para'>You will be able to sell your portfolio once 20 years from now when you hit 30 YEARS OLD.</p> 
                <p className='main__para'>Choose wisely.</p>
                <div className = "main__div">
                <StockOne stockOne={this.state.stockOne} onSubmit={this.handleSubmit} handleAlternate={this.handleAlternate} countOne={this.state.countOne}/>
                <StockTwo stockTwo={this.state.stockTwo} onSubmit={this.handleSubmitTwo} handleAlternate={this.handleAlternateTwo} countTwo={this.state.countTwo}/>
                <StockThree stockThree={this.state.stockThree} onSubmit={this.handleSubmitThree} handleAlternate={this.handleAlternateThree} countThree={this.state.countThree}
                />
                <StockFour stockFour={this.state.stockFour} onSubmit={this.handleSubmitFour} handleAlternate={this.handleAlternateFour} countFour={this.state.countFour}/>
                <StockFive stockFive={this.state.stockFive} onSubmit={this.handleSubmitFive} handleAlternate={this.handleAlternateFive} countFive={this.state.countFive}/>
                </div>
                <div className = "main__divTwo">
                <Result profit={this.state.Profit} cash={this.state.Cash}/>
                </div>
                <YouRock profit={this.state.Profit} />
            </section>
        )
    }
}

export default Main;
