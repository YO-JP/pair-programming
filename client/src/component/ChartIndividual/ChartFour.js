import React from 'react';
import Plot from 'react-plotly.js';

class ChartFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ChartX: [],
      ChartY: []
    }
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const This = this;
    console.log(This);
    const API_KEY = 'KUJ2BOOFVHWXUA63';
    let StockSymbol = 'XOM';
    let API = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let ChartXFunction = [];
    let ChartYFunction = [];

    fetch(API)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);

          for (var key in data['Monthly Adjusted Time Series']) {
            ChartXFunction.push(key);
            ChartYFunction.push(data['Monthly Adjusted Time Series'][key]['1. open']);
          }

          // console.log(ChartXFunction);
          This.setState({
            ChartX: ChartXFunction,
            ChartY: ChartYFunction
          });
        }
      )
  }

  render() {
    return (
      <div>
        <h1>Stock D: Exxon Mobil Corporation</h1>
        <Plot
          data={[
            {
              x: this.state.ChartX,
              y: this.state.ChartY,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 500, title: 'Stock Market'}}
        />
      </div>
    )
  }
}

export default ChartFour;
