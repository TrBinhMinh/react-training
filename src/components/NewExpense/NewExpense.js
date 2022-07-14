import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isInitialState, setIsInitialState] = useState(false);
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsInitialState(!isInitialState);
  };

  const isChangingState = () => {
    setIsInitialState(!isInitialState);
  };

  return (
    <div className="new-expense">
      {(!isInitialState && (
        <button onClick={isChangingState} type="button">
          Add New Expense
        </button>
      )) || <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={isChangingState} />}
    </div>
  );
};

export default NewExpense;
