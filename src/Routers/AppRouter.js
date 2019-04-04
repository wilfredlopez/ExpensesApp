import React from 'react'
//NEW REACT ROUTER
import {BrowserRouter, Route, Switch, Link } from 'react-router-dom' 

import App from './../components/App'
import {Menu} from './../components/Wilfred-Nav'
import Dashboard from './../components/Dashboard'
import Help from './../components/Help'
import AddExpensePage from './../components/AddExpensePage'
import EditPage from './../components/EditPage'
import NotFoundPage from './../components/NotFoundPage'


const AppRouter = ()=> (
    <BrowserRouter>
    <Menu/>
    <div className="container-fluid justify-content-center">
    <Switch>
        <Route path="/" component={Dashboard} exact={true}/>
        <Route path="/help"  component={Help}/>
        <Route path="/create"  component={AddExpensePage}/>
        <Route path="/edit/:id"  component={EditPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter
