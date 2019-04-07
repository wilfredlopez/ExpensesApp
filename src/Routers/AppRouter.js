import React from 'react'
//NEW REACT ROUTER
import {Route, Switch, Router } from 'react-router-dom' 

import Dashboard from './../components/Dashboard'
import AddExpensePage from './../components/AddExpensePage'
import EditPage from './../components/EditPage'
import NotFoundPage from './../components/NotFoundPage'
import LoginPage from './../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = ()=> (
    <Router history={history}>
    <div className="">
    <Switch>

        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/Dashboard" component={Dashboard} exact={true}/>
        <PrivateRoute path="/create"  component={AddExpensePage}/>
        <PrivateRoute path="/edit/:id"  component={EditPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
)

export default AppRouter
