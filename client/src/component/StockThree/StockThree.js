import React, { Component } from 'react'

import './StockThree.scss'


export class StockThree extends Component{
    state ={
        visible:false
    }
    render(){
        if ( this.props.stockThree.length === 0 ) {
            return null
        }
        const Len = this.props.stockThree.length-1;
        console.log(Len)
        return(

            <section className="stock_container">
            <h2>STOCK C</h2>
            <form onSubmit={this.props.onSubmit}> 
             <p>{this.props.stockThree[111].date}</p>
             <p>{this.props.stockThree[111].close}</p>
             <button type="submit">BUY</button>
            </form>
            <h5>TODAY</h5>
            <button className = "stock__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>CLICK ME!</button>
                {this.state.visible ? 
                    <>
                    <p>{this.props.stockThree[Len].date}</p>
                    <p>{this.props.stockThree[Len].close}</p>
                    </>
                    : null}
            <button onClick={this.props.handleAlternate}>SELL</button>
            </section>
           
        
        )
}}
export default StockThree