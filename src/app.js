//ES6 IMPORT WAY
import validator from 'validator';
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss' //for using scss
import 'normalize.css/normalize.css' //yarn add normalize.css a library for reseting all the default css form the browser
import AppRouter from './Routers/AppRouter'

//redux stuff
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import {setTextFilter} from './actions/filters'

const store = configureStore()


//creating demo expenses
// store.dispatch(addExpense({description: 'Water Bill', amount: 150, createdAt: 100}))
// store.dispatch(addExpense({description: 'Gas Bill', amount: 200, createdAt: 150}))
// store.dispatch(addExpense({description: 'Washitong post', amount: 300, createdAt: 110}))

//filters
//store.dispatch(setTextFilter('wa'))


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)


//console.log(store.getState())


    //providing the redux store to the provider component 
const jsx = (
    <Provider store={store}>
    <AppRouter/>
    
    </Provider>
    
)
ReactDOM.render(jsx, document.getElementById('app'))
//ReactDOM.render(<Menu />,document.getElementById('menu')) //my custom navbar



