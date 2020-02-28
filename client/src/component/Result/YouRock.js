import React from 'react';
import './YouRock.scss'

class YouRock extends React.Component {
    constructor(props){
        super(props);
        this.state={
            visible:false
        };
}
    
    render(){
        return (
            <div className = "yourock">
            <button className = "stock__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>CLICK ME!</button>
                {this.state.visible ? 
                    <>
                    {this.props.profit >1500 ?
                    <p>You are a stock market wizard! Invest NOW!</p> :
                    <p>You are a horrible investor! Stick to Wealthsimple!</p>
                    }
                    </>
                    :null}
            </div>
        )
    }
}

export default YouRock