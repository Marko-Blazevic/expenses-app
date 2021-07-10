import { useRef } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    titleInputRef.current.value = '';
    amountInputRef.current.value = '';
    dateInputRef.current.value = '';

    props.onSaveExpenseData(expenseData);
  };

  const onCancelButtonClick = (event) => {
    event.preventDefault();
    props.onCancelClick();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' ref={titleInputRef} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' ref={amountInputRef} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            ref={dateInputRef}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={onCancelButtonClick}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
