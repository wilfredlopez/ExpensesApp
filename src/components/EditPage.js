import React from 'react'
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from './../actions/expenses'


const EditPage = (props)=> {
    //console.log(props)
    return (<div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense)=>{

                props.dispatch(editExpense(props.expense.id,expense))
                props.history.push('/')
                console.log('updated', expense)
            }}
        />
        <button className="mb-3 btn btn-secondary" onClick={(e)=>{
            props.dispatch(removeExpense({id: props.expense.id}))
            props.history.push('/')
        }}>Remove</button>

        <p>Editing ID: {props.match.params.id}</p>
    </div>)
}

const mapStateToProps = (state, props) =>{
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditPage)