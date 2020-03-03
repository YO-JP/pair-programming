import React, { Component } from 'react'

import '../../Styles/stock.scss'

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

            <section className="stock">
            <h2>STOCK B</h2>
            <h5>Industry:pharmaceutical</h5>
            <p className="stock__description">This pharmaceutical and life sciences company came out with an anti-depressant in 1992.</p>
            <form className='stock__form' onSubmit={this.props.onSubmit}> 
             <p>{this.props.stockTwo[111].date}</p>
             <p>{this.props.stockTwo[111].close}</p>
             <button className = "stock__button" type="submit">BUY</button>
             <p>Count</p>
             <p>{this.props.countTwo}</p>
            </form>
            <h5>TODAY</h5>
            <button className = "stock__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>CLICK ME!</button>
                {this.state.visible ? 
                    <>
                    <p>{this.props.stockTwo[Len].date}</p>
                    <p>{this.props.stockTwo[Len].close}</p>
                    <button className = "stock__button" onClick={this.props.handleAlternate}>SELL</button>
                    </>
                    : null}
            </section>
           
        
        )
}}
export default StockTwo