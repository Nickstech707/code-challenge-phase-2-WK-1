import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import SearchBox from "./components/Search";
import AddTransactions from "./components/AddTransactions";
import TableDataList from "./components/TableData";
function App() {
  const [transactions, setTransactions] = useState([
    {
      date: "2019-12-01",
      description: "Paycheck from Bob's Burgers",
      category: "Income",
      amount: 1000,
    },
    {
      date: "2019-12-01",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
    {
      date: "2019-12-02",
      description: "South by Southwest Quinoa Bowl at Fresh & Co",
      category: "Food",
      amount: -10.55,
    },
    {
      date: "2019-12-04",
      description: "Sunglasses, Urban Outfitters",
      category: "Fashion",
      amount: -24.99,
    },
    {
      date: "2019-12-06",
      description: "Venmo, Alice Pays you for Burrito",
      category: "Food",
      amount: 8.75,
    },
    {
      date: "2019-12-06",
      description: "Chipotle",
      category: "Food",
      amount: -17.59,
    },
  ]);

  const addNewTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const searchNew = (searchQuery) => {
    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

    setTransactions(filteredTransactions);
  };
  return (
    <div className="App">
      <Header />
      <SearchBox onSearch={searchNew} />
      <AddTransactions onSubmit={addNewTransaction} />
      <TableDataList transactions={transactions} />
    </div>
  );
}
export default App;
