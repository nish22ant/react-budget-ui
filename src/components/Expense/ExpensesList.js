import "../../styles/ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const expenses = props.expenses;
  return (
    <>
      {props.expenses.length === 0 ? (
        <h2 className="expenses-list__fallback">No expenses found.</h2>
      ) : (
        expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      )}
    </>
  );
};

export default ExpensesList;
