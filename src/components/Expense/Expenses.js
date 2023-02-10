import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../../styles/Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [selectedDate, setSelectedDate] = useState("2019");
  const expenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedDate;
  });
  const selectDate = (date) => {
    setSelectedDate(() => {
      return date;
    });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          className="expenses"
          onSelectDate={selectDate}
          selectedDate={selectedDate}
        />
        <ExpensesList expenses={expenses} />
      </Card>
    </div>
  );
};

export default Expenses;
