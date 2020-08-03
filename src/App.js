import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { GloBalProvider } from "./context/GlobalState";

function App() {
  return (
    <GloBalProvider>
      <Header />
      <div className="container"></div>
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GloBalProvider>
  );
}

export default App;
