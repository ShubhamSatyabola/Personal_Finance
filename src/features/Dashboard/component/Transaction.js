import React from "react";

export default function Transaction({ transaction, deleteTransaction}) {
  let sign ;
+ transaction.amount >= 0 && transaction.add == 'true' ? sign = "+" :  sign = "-";
  return (
    <li
      className={
        transaction.amount >= 0 && transaction.add == "true" ? "plus" : "minus"
      }
    >
      {transaction.category}
      <span>
        <span style={{ marginRight: 8 }}>{transaction.date}</span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
}
