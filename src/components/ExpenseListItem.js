import React from 'react'
import {connect } from 'react-redux'
import {startRemoveExpense} from './../actions/expenses'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem =  ({dispatch, id, description, amount, createdAt}) => (
    <span  className="list-item">
        <Link  className="list-item--link" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title" key={description}>{description}</h3>
        
        <span key={amount}>  {moment(createdAt).format('MMM Do, YYYY')}   </span>
        </div>
        <h3>{numeral(amount / 100 ).format('$0,0.00')}</h3>

        </Link>
        <div className="block-container">
        <button className="button button--remove mb-3 ml-3" key={createdAt} onClick={(e)=>{
            dispatch(startRemoveExpense({id}))
        }}>Remove</button>
        </div>
        <hr/>
        </span>
);


export default connect()(ExpenseListItem) //this to get access dispatch


