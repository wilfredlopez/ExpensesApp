import React from 'react'
import {connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from './../selectors/expenses'

const ExpenseList = (props) => (
    <div className="container-fluid">
        <div className="row"><div className="col-12 col-sm-6 offset-sm-3">
        <h1>Expense List</h1>
        {props.expenses.map((expense) =>{
            return <ExpenseListItem key={expense.description} {...expense}/>
        })}
        </div></div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)



