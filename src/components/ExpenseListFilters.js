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
    return (<div className="">
        <div className="row">
       <div className="col-12 col-sm-6 offset-sm-3 py-2">
       <div className="col-12 m-0 p-0">
       <label className="input-group-text d-inline py-4"><span className="px-sm-2">Date: </span></label>
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
       
       </div>
       <div className="form-group row">
       
       <div className="col-sm-4">
       <label htmlFor="filters" className="input-group-text">Filter by:
       <select className="form-control ml-2" value={this.props.filters.sortBy
        } onChange={(e)=>{
            if(e.target.value === 'date'){
                this.props.dispatch(sortByDate())
            }else if(e.target.value === 'amount'){
                this.props.dispatch(sortByAmount())
            }
            
       }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
       </select></label>
       </div>
        <div className="col-sm-8">
        <label htmlFor="search" className="input-group-text">Search:
        <input id="search" type="text" className="form-control ml-2" value={this.props.filters.text} onChange={(e)=>{
                this.props.dispatch(setTextFilter(e.target.value))
            }} 
        ></input></label>
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