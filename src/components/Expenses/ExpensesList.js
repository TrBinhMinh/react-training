import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const expensesContent =
    (props.items.length === 0 && (
      <h2 className="expenses-list__fallback">Found no expenses</h2>
    )) ||
    props.items.map((el) => {
      return (
        <ExpenseItem
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      );
    });

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
