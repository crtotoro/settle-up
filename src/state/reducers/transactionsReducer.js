import { exceedsMin, isMatch, randomUUID } from "../../utils/helpers";

export default function transactionsReducer(state, action) {
  const { textMatchers, minAmount } = action.payload.context;
  switch(action.type) {
    // run on new file upload
    case 'SET_TRANSACTIONS': {
      const transactions = action.payload.transactions
        .filter(transaction => transaction["Description"] && transaction["Amount"] < 0) // exclude empty rows and credit card payments
        .map(transaction => ({...transaction, "Amount": -1 * transaction["Amount"], id: randomUUID(), status: 'other'})) // invert amounts to be positive;
        .map(transaction => {
          const desc = transaction["Description"];
          if(isMatch(desc, textMatchers.verify)) 
            return {...transaction, status: 'verify'};
          else if(isMatch(desc, textMatchers.include))
            return {...transaction, status: 'include'};
          else if(isMatch(desc, textMatchers.exclude))
            return {...transaction, status: 'exclude'};
          else if(exceedsMin(transaction["Amount"], minAmount))
            return {...transaction, status: 'verify'};
          else return transaction
        })
      return transactions;
    }
    // run this when modifying a single transaction from one status to another
    case 'UPDATE_TRANSACTION_STATUS': {
      return state;
    }
    // run this after updating matcher filters
    case 'APPLY_NEW_FILTERS': {
      const transactions = action.payload.transactions
        .map(transaction => {
          const desc = transaction["Description"];
          if(isMatch(desc, textMatchers.verify)) 
            return {...transaction, status: 'verify'};
          else if(isMatch(desc, textMatchers.include))
            return {...transaction, status: 'include'};
          else if(isMatch(desc, textMatchers.exclude))
            return {...transaction, status: 'exclude'};
          else if(exceedsMin(transaction["Amount"], minAmount))
            return {...transaction, status: 'verify'};
          else return transaction
        })
      return transactions;
    }
    default: {
      return state;
    }
  }
}