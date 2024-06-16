import { exceedsMin, isMatch, randomUUID, isExcludedByDate } from "../../utils/helpers";

export default function transactionsReducer(state, action) {
  const { textMatchers, minAmount, dates } = action.payload.context;
  const shouldCheckDate = dates.start || dates.end;

  /* Transaction object:
  { 
    id: uuid,
    'Description': string,
    'Amount': float,
    'Post Date': string,
    status: string
  }
  */

  switch(action.type) {
    // run on new file upload
    case 'SET_TRANSACTIONS': {
      const allowedHeaders = ["Description", "Amount", "Post Date", "id", "status"];
      const transactions = action.payload.transactions
        .filter(transaction => transaction["Description"] && transaction["Amount"] < 0) // exclude empty rows and credit card payments
        .map(transaction => ({
          ...transaction, 
          "Amount": -1 * transaction["Amount"], // invert amount to be positive
          id: randomUUID()}))  // assign unique id to transaction
        .map(transaction => {
          const desc = transaction["Description"];
          let status = 'other'; // set default status

          // change status if applicable
          if(shouldCheckDate && isExcludedByDate(transaction["Post Date"], dates))
            status = 'exclude';
          else {
            if(isMatch(desc, textMatchers.verify)) 
              status = 'verify';
            else if(isMatch(desc, textMatchers.include))
              status = 'include';
            else if(isMatch(desc, textMatchers.exclude))
              status = 'exclude';
            else if(exceedsMin(transaction["Amount"], minAmount))
              status = 'verify';
          }

          return {...transaction, status};
        })
        .map(transaction => {
          return Object.fromEntries(Object.entries(transaction).filter(([key]) => allowedHeaders.includes(key)));
        });
      return transactions;
    }
    // run this when modifying a single transaction's status, payor, etc. UNTESTED****
    case 'UPDATE_SINGLE_TRANSACTION': {
      return state.map(transaction => 
        transaction.id === action.payload.id
        ? { ...transaction, [action.payload.property]: action.payload.value }
        : transaction
      );
    }
    // run this after updating matcher filters
    case 'APPLY_NEW_FILTERS': {
      const transactions = action.payload.transactions
        .map(transaction => {
          const desc = transaction["Description"];
          let status = 'other'; // set default status

          // change status if applicable
          if(shouldCheckDate && isExcludedByDate(transaction["Post Date"], dates))
            status = 'exclude';
          else {
            if(isMatch(desc, textMatchers.verify)) 
              status = 'verify';
            else if(isMatch(desc, textMatchers.include))
              status = 'include';
            else if(isMatch(desc, textMatchers.exclude))
              status = 'exclude';
            else if(exceedsMin(transaction["Amount"], minAmount))
              status = 'verify';
          }
          
          return {...transaction, status};
        })
      return transactions;
    }
    default: {
      return state;
    }
  }
}