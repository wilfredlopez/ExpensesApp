import React from 'react'

export default class IndecisionApp extends React.Component{
    state = { 
        options:[]
    }   
    
    //test function
    handleRemoveAll = ()=> {
        this.setState(() => ({options: []}))
    }
    //component...did... are React Life cicle methods that fire at different times and we can use them.
    componentDidMount(){

    }

    componentDidUpdate(prevProps, prevState){

    }
    componentWillUnmount(){
 
    }

    render(){
        return(
            <div>
                <h1>WILFRED REACT TEMPLATE</h1>
            </div>
        )
    }
}











