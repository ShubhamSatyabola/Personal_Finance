import React, { useState } from "react";

export default function AddTransactions({ id, addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: id,
      category: text,
      amount: amount,
      date: date,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
    setDate("");
  };
  return (
    <div className="box">
      <h4>Add Transaction</h4>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Category</label>
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter category like food , bill , fees..."
            type="text"
          />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter Amount..."
            type="number"
          />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            placeholder="Enter Amount..."
            type="date"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}
