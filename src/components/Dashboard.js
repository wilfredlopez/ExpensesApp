 
import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './../components/ExpenseListFilters'

const Dashboard = ()=> (
    <div className="container-fluid">
    <h1>Dashboard H1</h1>
    <ExpenseListFilters/>
    <ExpenseList />
    </div>
)


export default Dashboard