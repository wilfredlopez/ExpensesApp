import React from 'react'
import {connect } from 'react-redux'
import {removeExpense} from './../actions/expenses'
import {Link} from 'react-router-dom'
 
const ExpenseListItem =  ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
        <button className="mb-3" onClick={(e)=>{
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
);


export default connect()(ExpenseListItem) //this to get access dispatch


