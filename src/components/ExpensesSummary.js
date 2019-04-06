import React from 'react'
import {connect } from 'react-redux'
import selectExpenses from './../selectors/expenses'
import numeral from 'numeral'
import getExpensesTotal from './../selectors/expenses-total'


const ExpensesSummary = (props) => {
    const isOne = props.expenses.length === 1
    const amount = numeral(getExpensesTotal(props.expenses)/100).format('$0,0.00')

    return(

    <div className="container">
        <div className="row text-center">
        <div className="col-12 col-sm-10 offset-sm-1 px-0">
        <p className="badge"><span>Displaying: {props.expenses.length} expense{!isOne && <span>s</span> }</span>
        <span className="pl-1">a grand total of {amount}</span>
        </p>


        </div></div>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)



