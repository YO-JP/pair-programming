import React, { Component } from 'react'

import './StockTwo.scss'

export class StockTwo extends Component{
    state ={
        visible:false
    }
    render(){
        if ( this.props.stockTwo.length === 0 ) {
            return null
        }
        const Len = this.props.stockTwo.length-1;
        console.log(Len)
        return(

            <section className="stock_container">
            <h2>STOCK B</h2>
            <form onSubmit={this.props.onSubmit}> 
             <p>{this.props.stockTwo[111].date}</p>
             <p>{this.props.stockTwo[111].close}</p>
             <button type="submit">BUY</button>
            </form>
            <h5>TODAY</h5>
            <button className = "stock__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>CLICK ME!</button>
                {this.state.visible ? 
                    <>
                    <p>{this.props.stockTwo[Len].date}</p>
                    <p>{this.props.stockTwo[Len].close}</p>
                    </>
                    : null}
            <button onClick={this.props.handleAlternate}>SELL</button>
            </section>
           
        
        )
}}
export default StockTwo