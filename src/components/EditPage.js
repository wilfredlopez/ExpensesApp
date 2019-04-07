import React from 'react'
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {editExpense,startEditExpense, startRemoveExpense} from './../actions/expenses'


export class EditPage extends React.Component {
    //console.log(props)
    onSubmit = (expense)=>{
            this.props.startEditExpense(this.props.expense.id,expense)
            this.props.history.push('/dashboard')
            console.log('updated', expense)
    }

    onRemove = (e) => {
            this.props.startRemoveExpense({id: this.props.expense.id})
            this.props.history.push('/dashboard')
    }
    render() {
        return (<div>
        <ExpenseForm 
            expense={this.props.expense}
            onSubmit={this.onSubmit}
        />
        <button className="mb-3 btn btn-secondary" onClick={this.onRemove}>Remove</button>

        <p>Editing ID: {this.props.match.params.id}</p>
    </div>)
    }
}

const mapStateToProps = (state, props) =>({
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id
        })
})

const mapDispacthToProps = (dispatch,props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id,expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispacthToProps)(EditPage)