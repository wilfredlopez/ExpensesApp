import React from 'react'
import moment from 'moment'
import {  SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment().format('MMM Do, YYYY')

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount:props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error:''
        }
    }
    onDescriptionChange = (e) =>{
        const description = e.target.value
        this.setState(() => ({description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(()=>({note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }   
    }
    onDateChange = (createdAt) =>{
        if(createdAt){
            this.setState(()=> ({createdAt}))
        }
        
    }
    onFocusChange = ({focused}) =>{
        this.setState(()=>({calendarFocused: focused }))
    }
    onSubmit = (e)=>{
        e.preventDefault()
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error:'Please provide description and amount'}))
        }else{  
            this.setState(()=>({error:''}))
            this.props.onSubmit( {
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf()
            })
            console.log('submitted!')
        }

    }
    render(){
        return (
            <div>
            <form onSubmit={this.onSubmit}>
            {this.state.error && <p className="alert alert-danger">{this.state.error}</p>}
            <div className="form-group">
                <label>Description: 
                <input type="text" 
                        placeholder="Description" 
                        autoFocus
                        value={this.state.description} 
                        onChange={this.onDescriptionChange}
                        className="form-control">
                </input>
                </label>
            </div>
            <div className="form-group">
                <label>Amount: 
                    <input type="text" 
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange} 
                        className="form-control">
                    </input>
                </label>
            </div>
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(date)=> false}
            /> 

            <div className="form-group">
                <label>Note: 
                <textarea placeholder="Note"
                    value={this.state.note}
                    onChange={this.onNoteChange} 
                    className="form-control"/>
                </label>
            </div>
                <button type="submit" className="btn btn-primary">Save Expense</button>
            
            </form>
            </div>
        )
    }
}