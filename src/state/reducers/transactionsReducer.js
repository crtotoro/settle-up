import { randomUUID } from "../../utils/helpers";

export default function transactionsReducer(state, action) {
  switch(action.type) {
    /* run on new file upload - need to split initial state into 
      {
        allTransactions: [],
        toVerify: [],
        toInclude: [],
        toExclude: []
      }
    */
    case 'SET_TRANSACTIONS': {
      return action.payload
        .filter(transaction => transaction["Description"] && transaction["Amount"] < 0) // exclude empty rows and credit card payments
        .map(transaction => ({...transaction, "Amount": -1 * transaction["Amount"], id: randomUUID()})); // invert amounts to be positive;
    }
    // run this when modifying a single transaction from one status to another
    case 'UPDATE_TRANSACTION_STATUS': {
      return state;
    }
    // run this after updating matcher filters
    case 'APPLY_NEW_FILTERS': {
      return state;
    }
    default: {
      return state;
    }
  }
}