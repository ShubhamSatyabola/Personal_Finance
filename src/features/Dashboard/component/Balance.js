import React from "react";

export default function Balance({ transactions }) {
  const amount = transactions.map((transaction) => Number(transaction.amount));
  const income = transactions
    .filter((item) => item.add == "true")
    .reduce((acc, item) => acc + +item.amount, 0);
  const expenses = transactions
    .filter((item) => item.add != "true")
    .reduce((acc, item) => acc + +item.amount, 0);
    const total = income - expenses;
  return (
    <div className="box">
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
}
