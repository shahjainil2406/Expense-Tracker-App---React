import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Method for using one useState to manage multiple states
    // const[userInput, setUserInput] = userState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''

    // });

    const titleChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
        // Method for using one useState to manage multiple states and if we have dependency on previous state
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, enteredTitle: event.target.value
        //     };
        // });
    };

    const dateChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredDate(event.target.value);
        // Method for using one useState to manage multiple states and if we have dependency on previous state
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, enteredAmount: event.target.value
        //     };
        // });
    };

    const amountChangeHandler = (event) => {
        console.log(event.target.value);
        setEnteredAmount(event.target.value);
        // Method for using one useState to manage multiple states and if we have dependency on previous state
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState, enteredDate: event.target.value
        //     };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense_controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2022-01-01" max="2025-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm; 