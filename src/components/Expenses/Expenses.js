import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {
  const [year, setYear] = useState('2021');
  const onSelectYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          onSelectYear={onSelectYearHandler}
          selectedYear={year}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
