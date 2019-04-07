import uuid from 'uuid'
import database  from '../firebase/firebase'
//module to allow redux to dispatch a function | yarn add redux-thunk


export const addExpense = (expense) => ({
    type:'ADD_EXPENSE',
    expense
})


export const startAddExpense = (expenseData = {})=>{
    
    return (dispatch, getState)=>{
        const uid = getState().auth.uid
        const {description = '', note='', amount = 0,createdAt = 0} = expenseData
        const expense = {description, note, amount, createdAt}

        database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
            dispatch(addExpense({
                id:  ref.key,
                ...expense
            }))
        })
    }
}

export const removeExpense = ({id} = {}) =>({
    type:'REMOVE_EXPENSE',
    id
    })

export const startRemoveExpense = ({id} = {}) => {

    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() =>{
            dispatch(removeExpense({id}))
        })

        
    }
}




export const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update({...updates}).then(()=>{
            dispatch(editExpense(id, updates))
        })
    } 
}


//set expenses
export const setExpenses = (expenses) => ({
    type:'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () =>{
    return (dispatch,getState) => {
        const uid = getState().auth.uid

        if (uid === undefined){
            let expenses = []
            const promise = new Promise(function(resolve, reject) {
                dispatch(setExpenses(expenses))
            })
            return  promise
        }

        return database.ref(`users/${uid}/expenses`).once('value').then((snapshots) =>{
            let expenses = [];
        
            snapshots.forEach((expense) => {
                expenses.push({
                    id:expense.key,
                    ...expense.val()
                })
            });

            dispatch(setExpenses(expenses))
        })
    }
}