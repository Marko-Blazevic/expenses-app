import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import Button from '../UI/Button';

const ExpenseItem = (props) => {
  const deleteItem = () => {
    const id = props.id;
    props.deleteItem(id);
  };
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate time={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
          <Button onClick={deleteItem}>Remove</Button>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItem;
