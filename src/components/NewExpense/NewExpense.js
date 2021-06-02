import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import NewExpenseToggle from './NewExpenseToggle';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  const [childToDisplay, setchildToDisplay] = useState('addNew');

  const displayForm = () => {
    setchildToDisplay('form');
  };

  const cancelHandler = () => {
    setchildToDisplay('addNew');
  };

  return (
    <div className='new-expense'>
      {childToDisplay === 'form' && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelClick={cancelHandler}
        />
      )}
      {childToDisplay === 'addNew' && (
        <NewExpenseToggle onAddNewExpense={displayForm} />
      )}
    </div>
  );
};

export default NewExpense;
