import React, { useState } from "react";
import "./DisplayExpense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function DisplayExpense(props) {
  const { items } = props;
  const [filterYear, setFilterYear] = useState("2020");
  const filterYearHandler = (year) => {
    setFilterYear(year);
  };
  const filteredExpenses = items.filter(
    (el) => el.date.getFullYear() === +filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterYear={filterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default DisplayExpense;
