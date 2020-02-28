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
            <form onSubmit={this.props.onSubmit}> 
             <p>{this.props.stockFour[111].date}</p>
             <p>{this.props.stockFour[111].close}</p>
             <button type="submit">BUY</button>
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