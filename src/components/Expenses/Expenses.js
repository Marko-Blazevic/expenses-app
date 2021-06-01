import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {
  const date = new Date();
  const [year, setYear] = useState(date.getFullYear());
  const onSelectYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  return (
    <Card className='expenses'>
      <div>
        <ExpensesFilter onSelectYear={onSelectYearHandler} year={year} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </div>
    </Card>
  );
};

export default Expenses;
