//firebase.google.com
//database from google

import * as firebase from 'firebase'
import moment from 'moment'
import {connect} from 'react-redux'
import {startAddExpense} from './../actions/expenses'

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

const getFromDatabase = database.ref('expenses').once('value',(snapshots) =>{
    const expenses = []

    snapshots.forEach(expense => {
        expenses.push({
            id:expense.key,
            ...expense.val()
        })
    });

    expenses.forEach((expense)=>{
      startAddExpense(expense)
    })

    // console.log(expenses)
    return expenses

})

export  {firebase, getFromDatabase, googleAuthProvider, database as default}
// const demoExpenses = {
//     description:'Demo expenses',
//     note:'',
//     amount:300,
//     createdAt:22
// }

// database.ref('expenses').push(demoExpenses)





// database.ref('expenses').on('child_removed',(child) =>{
//     console.log(child.key, child.val())
// })


