import React from 'react'
import {connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from './../selectors/expenses'

const ExpenseList = (props) => (
    <div className="container-fluid">
    <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
    </div>   
        {props.expenses.map((expense) =>{
            return <ExpenseListItem key={expense.description} {...expense}/>
        })}

    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)



