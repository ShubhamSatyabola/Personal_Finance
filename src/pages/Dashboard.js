import React, { useEffect } from "react";
import Balance from "../features/Dashboard/component/Balance";
import AddTransactions from "../features/Dashboard/component/AddTransaction";
import TransactionsList from "../features/Dashboard/component/TransactionList";

import { deleteTransactionAsync, postTransactionsAsync, selectTransaction } from "../features/Dashboard/dashboardSlice";

import { fetchTransactionsAsync } from "../features/Dashboard/dashboardSlice";
import { useDispatch, useSelector } from "react-redux";
import IncomeExpense from "../features/Dashboard/component/IncomeExpense";

//charts
import {Chart as ChartJs,ArcElement,Tooltip,Legend}  from 'chart.js';
import { Doughnut } from "react-chartjs-2";
ChartJs.register(ArcElement, Tooltip, Legend)

export function Dashboard(){
    const transactions = useSelector(selectTransaction)
    

     const income = transactions
       .filter((item) => item.add == "true")
       .reduce((acc, item) => acc + +item.amount, 0);
     const expenses = transactions
       .filter((item) => item.add != "true")
       .reduce((acc, item) => acc + +item.amount, 0);

    const total = income - expenses
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchTransactionsAsync())
    },[])

    
    const addTransaction = (transaction) => {
        // console.log(transaction);
        if(total >= +transaction.amount){
            const transactionData = { ...transaction,add:"false" };
            dispatch(postTransactionsAsync(transactionData));
        }
        else{
            const transactionData = { ...transaction, add: "true"  };
            dispatch(postTransactionsAsync(transactionData));
            console.log('you are running out of funds');
        }
        
    }

    const deleteTransaction = (id) => {
       console.log('delete' + id);
    };
    
    //chart data

    const data = {
        labels:['Income','Expense'],
        datasets:[{
            label:'poll',
            data:[income,expenses],
            backgroundColor:['green', 'red'],
            borderColor:['black', 'black'],
            circumference:180,
            rotation:270
        }]
    }

    const options = {

    }

    return (
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions} />
        
        <div className="box">
          <h4>Visual Representation</h4>
          <Doughnut data={data} options={options}></Doughnut>
        </div>

        <TransactionsList
          transactions={transactions}
          deleteTransaction={(id) => deleteTransaction(id)}
        />
        <AddTransactions
          addTransaction={(transaction) => addTransaction(transaction)}
          id={
            transactions[transactions.length - 1]
              ? transactions[transactions.length - 1].id + 1
              : 1
          }
        />
      </div>
    );
}



