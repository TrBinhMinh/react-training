import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./DisplayExpense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function DisplayExpense(props) {
  const { items } = props;
  const [filterYear, setFilterYear] = useState("2020");
  const filterYearHandler = (year) => {
    setFilterYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onFilterYear={filterYearHandler} />
        {items.map((el) => {
          console.log(el.date.getFullYear(), filterYear);
          return (
            <ExpenseItem key={el.id} title={el.title} amount={el.amount} date={el.date} />
          );
        })//.filter(el => el.date.getFullYear() === +filterYear)
      }
      </Card>
    </div>
  );

  //   return (
  //     <div className="expenses">
  //       <ExpenseItem
  //         title={props.title[0]}
  //         amount={props.amount[0]}
  //         date={props.date[0]}
  //       />
  //       <ExpenseItem
  //         title={props.title[1]}
  //         amount={props.amount[1]}
  //         date={props.date[1]}
  //       />
  //       <ExpenseItem
  //         title={props.title[2]}
  //         amount={props.amount[2]}
  //         date={props.date[2]}
  //       />
  //       <ExpenseItem
  //         title={props.title[3]}
  //         amount={props.amount[3]}
  //         date={props.date[3]}
  //       />
  //     </div>
  //   );
}

export default DisplayExpense;
