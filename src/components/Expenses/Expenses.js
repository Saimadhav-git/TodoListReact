import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, SetFilteredYear] = useState("2020");

  const filterChangeHandler = (val) => {
    console.log(val);
    SetFilteredYear(val);
  };
  const getExpenses = () => {
    return props.expenses.filter(
      (expense) => expense.date.getFullYear().toString() === filteredYear
    );
  };
  let expenses = getExpenses();
  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={expenses}></ExpensesChart>
      <ExpensesList expenses={expenses}></ExpensesList>
    </Card>
  );
}

export default Expenses;
