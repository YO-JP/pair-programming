import React, { Component } from 'react'

import '../../Styles/stock.scss'

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

            <section className="stock">
            <h2>STOCK E</h2>
            <h5>Industry:Finance</h5>
            <p className='stock__description'>This financial company made a acquisition which was the largest bank acquisition in history..</p>
            <form className='stock__form' onSubmit={this.props.onSubmit}> 
             <p>{this.props.stockFive[111].date}</p>
             <p>{this.props.stockFive[111].close}</p>
             <button className="stock__button" type="submit">BUY</button>
             <p>Count</p>
             <p>{this.props.countFive}</p>
            </form>
            <h5>TODAY</h5>
            <button className = "stock__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>CLICK ME!</button>
                {this.state.visible ? 
                    <>
                    <p>{this.props.stockFive[Len].date}</p>
                    <p>{this.props.stockFive[Len].close}</p>
                    <button className="stock__button" onClick={this.props.handleAlternate}>SELL</button>
                    </>
                    : null}
            </section>
           
        
        )
}}
export default StockFive