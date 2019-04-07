//ES6 IMPORT WAY
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss' //for using scss
import 'normalize.css/normalize.css' //yarn add normalize.css a library for reseting all the default css form the browser
import AppRouter, {history} from './Routers/AppRouter'

//redux stuff
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import {login, logout} from './actions/auth'
import {firebase} from './firebase/firebase'


const store = configureStore()


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

// console.log(visibleExpenses)


    //providing the redux store to the provider component 
const jsx = (
    <Provider store={store}>
    <AppRouter/>
    
    </Provider>
    
)

//Andrew's way of doing it
import {startSetExpenses} from './actions/expenses'

let hasRendered = false


const renderApp = () =>{
    ReactDOM.render(jsx, document.getElementById('app'))
    if (!hasRendered){
        store.dispatch(startSetExpenses()).then(()=>{
            ReactDOM.render(jsx, document.getElementById('app'))
            hasRendered = true
        })   
    }

}

// ReactDOM.render(<p>Loading</p>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        console.log(user.uid)
        store.dispatch(login(user.uid))

        renderApp() 
        if(history.location.pathname === '/'){
            history.push('/dashboard')
        }
        console.log("Logged in")
    }else{
        console.log('Logout')
        renderApp()
        store.dispatch(logout())
        history.push('/')
        
        
        
        
    }
})



