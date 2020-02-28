import React, { Component } from 'react'

import './StockFive.scss'

export class StockFive extends Component{
    state ={
        visible:false
    }
    render(){
        if ( this.props.stockFive.length === 0 ) {
            return null
        }
        const Len = this.props.stockFive.length-1;
        console.log(Len)
        return(

            <section className="stock_container">
            <h2>STOCK E</h2>
            <h5>Industry:Finance</h5>
            <p>In 1992 this financial company acquired  Security Pacific Corporation which was the largest bank acquisition in history..</p>
            <form onSubmit={this.props.onSubmit}> 
             <p>{this.props.stockFive[111].date}</p>
             <p>{this.props.stockFive[111].close}</p>
             <button type="submit">BUY</button>
            </form>
            <h5>TODAY</h5>
            <button className = "stock__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>CLICK ME!</button>
                {this.state.visible ? 
                    <>
                    <p>{this.props.stockFive[Len].date}</p>
                    <p>{this.props.stockFive[Len].close}</p>
                    </>
                    : null}
            <button onClick={this.props.handleAlternate}>SELL</button>
            </section>
           
        
        )
}}
export default StockFive