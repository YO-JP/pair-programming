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
            <button className = "yourock__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>COMPARE YOUR RESULT TO AVG</button>
                {this.state.visible ? 
                    <>
                    {this.props.profit >1500 ?
                    <>
                    <p className="yourock__paragraph">You are a Stock Market Wizard! Invest NOW!</p> 
                    <p>Avg profit for HOT STOCK GAME IS 1500.</p>
                    </>:
                    <>
                    <p className="yourock__paragraph">You are a HORRIBLE investor! Stick to Wealthsimple!</p>
                    <p>Avg profit for HOT STOCK GAME IS 1500.</p>
                    </>
                    }
                    </>
                    :null}
            </div>
        )
    }
}

export default YouRock