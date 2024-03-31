import { randomUUID } from "../../utils/helpers";

export default function transactionsReducer(state, action) {
  switch(action.type) {
    case 'SET_TRANSACTIONS': {
      return action.payload
        .filter(transaction => transaction["Description"] && transaction["Amount"] < 0) // exclude empty rows and credit card payments
        .map(transaction => ({...transaction, "Amount": -1 * transaction["Amount"], id: randomUUID()})); // invert amounts to be positive;
    }
    case 'GET_ALL_TRANSACTIONS': {
      return state;
    }
    case 'GET_TRANSACTIONS_TO_INCLUDE': {
      return state;
    }
    case 'GET_TRANSACTIONS_TO_EXCLUDE': {
      return state;
    }
    case 'GET_TRANSACTIONS_TO_VERIFY': {
      return state;
    }
    default: {
      return state;
    }
  }
}