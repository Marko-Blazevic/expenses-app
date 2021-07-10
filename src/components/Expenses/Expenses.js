import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import React, { useState } from 'react';

const Expenses = (props) => {
  const [year, setYear] = useState('2021');
  const onSelectYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });
  const deleteItem = (id) => {
    props.deleteItem(id);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter onSelectYear={onSelectYearHandler} selectedYear={year} />
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList items={filteredExpenses} deleteItem={deleteItem} />
    </Card>
  );
};

export default Expenses;
