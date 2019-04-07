import React from 'react'
import {connect } from 'react-redux'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from './../actions/filters'
import {DateRangePicker} from 'react-dates'


class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) =>{
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused)=>{
        this.setState(() =>{
            return{
                calendarFocused
            }
        })
    }

    render() {
    return (<div id="expense-list" className="container">
        <div className="row">
       <div className="col-12 py-2">
       <div className="row justify-content-center">
        
       <div className="col-12 col-md-4">
       <div className="d-flex">
       <div className="form-group">
       <label htmlFor="filters" className="input-group-text">Sort By:</label>
       <select className="form-control" value={this.props.filters.sortBy
        } onChange={(e)=>{
            if(e.target.value === 'date'){
                this.props.dispatch(sortByDate())
            }else if(e.target.value === 'amount'){
                this.props.dispatch(sortByAmount())
            }
            
       }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
       </select>
       </div>
       </div>
       </div>
       <div className="col-12 col-md-6">
       <div className="d-flex justify-content-end">
       <label className="input-group-text"><span className="px-sm-2">Date: </span></label>
       <DateRangePicker 
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        isOutsideRange={()=> false}
        numberOfMonths={1}
        showClearDates={true}
       />
       
       </div></div>
      
      
        <div className="col-12 col-md-10">
       <div className="justify-content-start">
        <label htmlFor="search" className="input-group-text"><div className="d-inline pr-3">Search:</div>
        <input id="search" type="text" className="form-control" value={this.props.filters.text} onChange={(e)=>{
                this.props.dispatch(setTextFilter(e.target.value))
            }} 
        ></input></label>
        </div>
       </div>
       </div>
       </div>
       </div>
    </div> 
    )}
} 

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)