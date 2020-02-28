import React from 'react';
import axios from 'axios';
import StockOne from '.././component/StockOne/StockOne.js'

const apiKey = 'KUJ2BOOFVHWXUA63';


class Main extends React.Component {
    constructor(props) {
        super(props);
          this.state={
              stockOne: {}
          };    
    }

    componentDidMount(){
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=${apiKey}`)
            .then(res=> 
                {this.setState({stockOne:res.data["Monthly Time Series"]},()=>{
                console.log(res.data["Monthly Time Series"]);
                console.log(this.state.stockOne);
                console.log(this.state.stockOne["2020-02-27"]["4. close"])
                })
            })

            
    }


    render() {
        return (
            <>
                <StockOne stockOne={this.state.stockOne}/>
            </>
        )
    }
}

export default Main;
