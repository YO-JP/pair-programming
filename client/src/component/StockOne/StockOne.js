import React, { Component } from 'react';
import './StockOne.scss';



export class StockOne extends Component{
    
    render(){
        return this.props.stockOne.filter(stockOne => stockOne.date ==="1989-09-19" || stockOne.date==="1989-10-02").map((stockP)=>(
            <div className= 'stock__wrapper'>
            <section className='stock__info'> 
             <p>{stockP.date}</p>
             <p>{stockP.close}</p>
            </section>
            </div>
        )
            
           
        
        )
}}
export default StockOne