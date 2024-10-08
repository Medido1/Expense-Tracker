import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({transaction}) {
  const {deleteTransaction} = useContext(GlobalContext);
  return (
    <li 
      className={transaction.amount > 0 ? "plus" : "minus"}
    >
      {transaction.text} <span>${transaction.amount > 0 ? "+" : ""}{transaction.amount}</span>
      <button 
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
        >x</button>
    </li>
  )
}

export default Transaction;