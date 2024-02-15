import React from "react";
import Transaction from "./Transaction";

export default function TransactionsList({ transactions, deleteTransaction }) {

 let sortedTransactions = [...transactions].sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
  return (
    <div className="box">
      <h4>Transactions</h4>
      <ul className="list">
        {sortedTransactions.map((transaction) => {
          return (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={(id) => deleteTransaction(id)}
            />
          );
        })}
      </ul>
    </div>
  );
}