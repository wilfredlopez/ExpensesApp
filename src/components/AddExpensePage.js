import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import {addExpense} from './../actions/expenses'

const AddExpensePage = (props) =>(
    <div>
        <h1>This is Add Expense Page</h1>
        <ExpenseForm onSubmit={(expense) => {
                props.dispatch(addExpense(expense))
            //passing prop down and we will get back the value updated

            props.history.push('/') //redirecting to home page
        }}/>
    </div>
)



export default connect()(AddExpensePage)


