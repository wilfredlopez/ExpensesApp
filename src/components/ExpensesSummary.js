import React from 'react'
import {connect } from 'react-redux'
import selectExpenses from './../selectors/expenses'
import numeral from 'numeral'
import getExpensesTotal from './../selectors/expenses-total'
import {Link } from 'react-router-dom' 

const ExpensesSummary = (props) => {
    const amount = numeral(getExpensesTotal(props.expenses)/100).format('$0,0.00')

    return(

    <div className="list_bg">
    
        <div className="row text-center">
     
        <div className="col-12 col-sm-10 offset-sm-1 px-0">
       
        <p className="">
        
        <span>Displaying: {props.expenses.length}. <span className="pl-1">Grand total of {amount}</span></span>
        
        </p>

       
        </div>
        <Link to="/create"  className="btn button  mb-3">Add Expense</Link>
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)



