import moment from 'moment'
//FUNCTION TO SORT AND FILTER THE DATA .THIS RETURNS THE VISIBLE DATA
//const getVisibleExpenses

export default (expenses, {text, sortBy, startDate, endDate}) => {//takes the entire expenses array and the filters array. distructured in this case
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch =  startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true
        const endDateMatch = endDate ? endDate.isSameOrBefore(createdAtMoment, 'day'): true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }else{
            return 0
        }
    })
}

