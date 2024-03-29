import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Vehicle Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Vehicle (Access)',
      amount: 105000,
      date: new Date(2022, 9, 7),
    },
  ];

  const addExpenseHandler = (expenseData) => {
    console.log("In app.js");
    console.log(expenseData);
    expenses.push(expenseData);
  }

  return (
    <div>
      <NewExpense addExpenseData={addExpenseHandler}/>
      <Expenses expenses = {expenses} />
    </div>
  );
}

export default App;
