import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
import DelItemContext from './context/delete-item-context';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [baseExpenses, setBaseExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setBaseExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
    console.log([expenseData, ...baseExpenses]);
  };

  const deleteItemHandler = (id) => {
    const reducedExpenses = baseExpenses.filter((item) => item.id !== id);
    setBaseExpenses(reducedExpenses);
  };

  return (
    <DelItemContext.Provider value={{ delItem: deleteItemHandler }}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={baseExpenses} />
    </DelItemContext.Provider>
  );
}

export default App;
