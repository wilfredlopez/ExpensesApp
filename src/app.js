//ES6 IMPORT WAY
import validator from 'validator';
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss' //for using scss
import 'normalize.css/normalize.css' //yarn add normalize.css a library for reseting all the default css form the browser
import AppRouter from './Routers/AppRouter'
import moment from 'moment'

//redux stuff
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {startAddExpense} from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import {setTextFilter} from './actions/filters'


//database Get //my way of doing it.
import './firebase/firebase'
import {getFromDatabase} from './firebase/firebase'

getFromDatabase.then((snapshots) =>{
    snapshots.forEach((expense) => {
        //console.log(expense.key, expense.val())
        store.dispatch(addExpense({...expense.val()}))
    })
})




const store = configureStore()



//creating demo expenses
// store.dispatch(addExpense({description: 'Water Bill', amount: 150, createdAt: moment()}))
// store.dispatch(addExpense({description: 'Gas Bill', amount: 200, createdAt: moment()}))
// store.dispatch(addExpense({description: 'Washitong post', amount: 300, createdAt: moment()}))

//filters
//store.dispatch(setTextFilter('wa'))


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

// console.log(visibleExpenses)


//console.log(store.getState())


    //providing the redux store to the provider component 
const jsx = (
    <Provider store={store}>
    <AppRouter/>
    
    </Provider>
    
)


//Andrew's way of doing it
import {startSetExpenses} from './actions/expenses'

ReactDOM.render(<p>Loading</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'))
})

// //my way of doing it
// ReactDOM.render(jsx, document.getElementById('app'))




