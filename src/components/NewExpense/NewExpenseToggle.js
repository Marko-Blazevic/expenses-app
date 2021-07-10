import './NewExpense.css';
import Button from '../UI/Button';

const NewExpenseToggle = (props) => {
  const addNewExpense = () => {
    props.onAddNewExpense();
  };

  return (
    <div>
      <Button onClick={addNewExpense}>Add New Expense</Button>
    </div>
  );
};

export default NewExpenseToggle;
