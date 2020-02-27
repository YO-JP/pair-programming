import React from 'react';
import axios from 'axios';

const apiKey = 'KUJ2BOOFVHWXUA63';

export class Main extends React.Component {
    constructor(props) {
        super(props);
          this.state={
              stock:{}
          };    
    }

    componentDidMount(){
        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=${apiKey}`)
            .then(res=> this.setState({stock1:res.data},console.log(res.data)))
            
    }


    render() {
        return (
            <>
                <h1>dfadf</h1>
            </>
        )
    }
}

export default Main;
