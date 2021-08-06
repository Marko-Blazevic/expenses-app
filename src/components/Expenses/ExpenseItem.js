import React, { useContext } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import Button from '../UI/Button';
import DelItemContext from '../../context/delete-item-context';

const ExpenseItem = (props) => {
  const ctxDelItem = useContext(DelItemContext);
  const delItem = () => {
    ctxDelItem.delItem(props.id);
  };
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate time={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
          <Button onClick={delItem}>Remove</Button>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
