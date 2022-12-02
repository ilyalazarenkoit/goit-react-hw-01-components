import transactionHistory from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

function TransactionHistory ({transactions}) {
return (
    <table className={transactionHistory.transaction__history}>
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(transaction => {
        return (
      <tr key= {transaction.id}>
      <td>{transaction.type[0].toUpperCase() + transaction.type.slice(1, transaction.type.length)}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
        )
    })}
    
  </tbody>
</table>
)
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    amount:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  }).isRequired
  )
}

export {TransactionHistory}


