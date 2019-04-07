import React from 'react'
//NEW REACT ROUTER
import {Route, Switch, Link, Router } from 'react-router-dom' 

import App from './../components/App'
import Menu from './../components/Wilfred-Nav'
import Dashboard from './../components/Dashboard'
import Help from './../components/Help'
import AddExpensePage from './../components/AddExpensePage'
import EditPage from './../components/EditPage'
import NotFoundPage from './../components/NotFoundPage'
import LoginPage from './../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = ()=> (
    <Router history={history}>
    <div className="">
    <Switch>

        <Route path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/Dashboard" component={Dashboard} exact={true}/>
        <PrivateRoute path="/help"  component={Help}/>
        <PrivateRoute path="/create"  component={AddExpensePage}/>
        <PrivateRoute path="/edit/:id"  component={EditPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
)

export default AppRouter
