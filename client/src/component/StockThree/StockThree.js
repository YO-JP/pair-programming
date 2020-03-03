import React, { Component } from 'react'

import '../../Styles/stock.scss'


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

            <section className="stock">
            <h2>STOCK C</h2>
            <h5>Industry:Apparel</h5>
            <p className='stock__description'>This clothing company has been credited with fueling the turtle neck craze of the late 80's/early 90's.</p>
            <form className='stock__form' onSubmit={this.props.onSubmit}> 
             <p>{this.props.stockThree[111].date}</p>
             <p>{this.props.stockThree[111].close}</p>
             <button className = "stock__button" type="submit">BUY</button>
             <p>Count</p>
             <p>{this.props.countThree}</p>
            </form>
            <h5>TODAY</h5>
            <button className = "stock__button" onClick={()=>{
                    this.setState({visible:!this.state.visible});
                }}>CLICK ME!</button>
                {this.state.visible ? 
                    <>
                    <p>{this.props.stockThree[Len].date}</p>
                    <p>{this.props.stockThree[Len].close}</p>
                    <button className = "stock__button" onClick={this.props.handleAlternate}>SELL</button>
                    </>
                    : null}
            </section>
           
        
        )
}}
export default StockThree