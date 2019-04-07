 
import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './../components/ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'


const Dashboard = ()=> (
    <div className="container-fluid">
    <h1 className="text-center">Dashboard</h1>
    <ExpenseListFilters/>

       
    <ExpensesSummary/>
    <ExpenseList />
    </div>
)


export default Dashboard