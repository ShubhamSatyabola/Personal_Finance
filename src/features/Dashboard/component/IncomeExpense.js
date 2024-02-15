import React from "react";

export default function IncomeExpense({ transactions }) {
  const income = transactions
    .filter((item) => item.add == "true" )
    .reduce((acc, item) => acc + +item.amount, 0);
  const expenses = transactions
    .filter((item) => item.add != "true")
    .reduce((acc, item) => acc + +item.amount, 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p className="money minus">-${expenses}</p>
      </div>
    </div>
  );
}
