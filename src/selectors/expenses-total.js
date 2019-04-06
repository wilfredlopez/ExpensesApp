
//get total expenses
const getExpensesTotal = (expenses) => {
    let total = 0
    
    expenses.forEach(expense => {
        total += expense.amount
    });

    return total
}


// //different way of doing it.
// const getExpensesTotal = (expenses) => {
//     return expenses.map((expense) => expense.amount).reduce((sum,value) => sum + value,0)
// }



export default getExpensesTotal


//
// const testExpenses = [{
//         id:'dsfdsdf',
//         description: 'January Rent',
//         note:'Final payment for that address',
//         amount: 555,
//         createdAt:0
// },{
//     id:'dsfdsdf',
//     description: 'January Rent',
//     note:'Final payment for that address',
//     amount: 100,
//     createdAt:0
// },{
//     id:'dsfdsdf',
//     description: 'January Rent',
//     note:'Final payment for that address',
//     amount: 100,
//     createdAt:0
// }]

//console.log(getExpensesTotal(testExpenses))