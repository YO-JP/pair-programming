import React, { Component } from 'react'



export class StockOne extends Component{
    
    render(){
        return this.props.stockOne.filter(stockOne => stockOne.date ==="1989-09-19" || stockOne.date==="1989-10-02").map((stockP)=>(
            <section> 
             <p>{stockP.date}</p>
             <p>{stockP.close}</p>
            </section>
        )
            
           
        
        )
}}
export default StockOne