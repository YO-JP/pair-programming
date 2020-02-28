import React, { Component } from 'react'

import './StockFour.scss'

export class StockFour extends Component{
    state ={
        visible:false
    }
    render(){
        if ( this.props.stockFour.length === 0 ) {
            return null
        }
        const Len = this.props.stockFour.length-1;
        console.log(Len)
        return(

            <section className="stock_container">
            <h2>STOCK D</h2>
            <h5>Industry:Petrochemicals</h5>
            <p> The Oil Polluting Act of 1990 was  created due to this company's negligence.</p>
            <form onSubmit={this.props.onSubmit}> 
             <p>{this.props.stockFour[111].date}</p>
             <p>{this.props.stockFour[111].close}</p>
             <button type="submit">BUY</button>
             <p>Count</p>
             <p>{this.props.countFour}</p>
            </form>
            <h5>TODAY</h5>
            <button className = "stock__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>CLICK ME!</button>
                {this.state.visible ? 
                    <>
                    <p>{this.props.stockFour[Len].date}</p>
                    <p>{this.props.stockFour[Len].close}</p>
                    </>
                    : null}
            <button onClick={this.props.handleAlternate}>SELL</button>
            </section>
           
        
        )
}}
export default StockFour