import React, { Component } from 'react';
import '../../Styles/stock.scss'

export class StockOne extends Component{
    state ={
        visible:false
    }
    render(){
        if ( this.props.stockOne.length === 0 ) {
            return null
        }
        const Len = this.props.stockOne.length-1;
        console.log(Len)
        return(

            <section className="stock">
            <h2>STOCK A</h2>
            <h5>Industry:Technology</h5>
            <p className="stock__description">In 1990 released new operating system that sold over 100,000 copies in two weeks.</p>
            <form className='stock__form' onSubmit={this.props.onSubmit}> 
             <p>{this.props.stockOne[111].date}</p>
             <p>{this.props.stockOne[111].close}</p>
             <button className = "stock__button"type="submit">BUY</button>
             <p>Count</p>
             <p>{this.props.countOne}</p>
            </form>
            <h5>TODAY</h5>
            <button className = "stock__button" className = "stock__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>CLICK ME!</button>
                {this.state.visible ? 
                    <>
                    <p>{this.props.stockOne[Len].date}</p>
                    <p>{this.props.stockOne[Len].close}</p>
                    <button className = "stock__button" onClick={this.props.handleAlternate}>SELL</button>
                    </>
                    : null}
            </section>
           
        
        )
}}
export default StockOne