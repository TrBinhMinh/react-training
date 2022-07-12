import ExpenseItem from "./ExpenseItem";
import "./DisplayExpense.css";
import Card from "./Card";

function DisplayExpense(props) {
  const { items } = props;

  return (
    <Card className="expenses">
      {items.map((el) => {
        return (
          <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
        );
      })}
    </Card>
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
