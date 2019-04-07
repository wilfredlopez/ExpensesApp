import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import expensesReducer from './../reducers/expenses'
import filtersReducer from './../reducers/filters'
import thunk from 'redux-thunk' //to allow redux to dispatch functions
import authReducer from './../reducers/auth'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
//store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

return store
}