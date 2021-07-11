import React, { useRef, useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
import './ExpenseForm.css';
import Button from '../UI/Button';

const ExpenseForm = (props) => {
  const titleInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredAmount = amountInputRef.current.value;
    const enteredDate = dateInputRef.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredAmount.trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      setError(true);
      return;
    }

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

  const removeErrorModal = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && <ErrorModal onClick={removeErrorModal} />}
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
          <Button onClick={onCancelButtonClick}>Cancel</Button>
          <Button type='submit'>Add Expense</Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ExpenseForm;
