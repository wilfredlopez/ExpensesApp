import React from 'react'
import {connect } from 'react-redux'
import {removeExpense} from './../actions/expenses'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem =  ({dispatch, id, description, amount, createdAt}) => (
    <div key={id}>
        <Link to={`/edit/${id}`}>
            <h3 key={description}>{description}</h3>
        </Link>
        <p key={amount}>{numeral(amount / 100 ).format('$0,0.00')} - {moment(createdAt).format('MMM Do, YYYY')}</p>
        <button key={createdAt}className="mb-3" onClick={(e)=>{
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
);


export default connect()(ExpenseListItem) //this to get access dispatch


