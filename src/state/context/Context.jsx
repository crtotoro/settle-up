import React, { createContext, useContext, useState, useReducer } from "react";
import matcherReducer from "../reducers/matcherReducer";
import { initMatchers } from "../init/initMatchers";

const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [ transactions, setTransactions ] = useState([]);
  const [ textMatchers, matcherDispatch ] = useReducer(matcherReducer, initMatchers);
  const [ dates, setDates ] = useState({ start: '', end: '' });
  const [ defaultPayor, setDefaultPayor ] = useState('p1');
  const [ participants, setParticipants ] = useState({ p1: '', p2: '' }); 
  const [ isLoading, setIsLoading ] = useState(false);

  return (
    <AppContext.Provider value={{ 
      transactions, setTransactions, 
      textMatchers, matcherDispatch, 
      dates, setDates, 
      defaultPayor, setDefaultPayor,
      participants, setParticipants,
      isLoading, setIsLoading 
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const handleFieldChange = (e, setter) => 
setter((current) => 
  ({ ...current, [e.target.name]: e.target.value }));