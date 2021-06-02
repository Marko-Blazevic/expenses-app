import './NewExpense.css';

const NewExpenseToggle = (props) => {
  const addNewExpense = () => {
    props.onAddNewExpense();
  };

  return (
    <div>
      <button onClick={addNewExpense}>Add New Expense</button>
    </div>
  );
};

export default NewExpenseToggle;
