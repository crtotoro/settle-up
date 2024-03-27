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
  const [ settings, setSettings ] = useState({ textMatchers, matcherDispatch, dates, setDates });
  const [ participants, setParticipants ] = useState({ p1: 'Participant 1', p2: 'Participant 2' }); // continue here

  return (
    <AppContext.Provider value={{ transactions, setTransactions, settings }}>
      {children}
    </AppContext.Provider>
  );
}