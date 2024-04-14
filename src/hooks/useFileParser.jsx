import Papa from 'papaparse';
import { useState, useEffect } from 'react';
import { useApp } from '../state/context/Context';

export default function useFileParser() {
  const { transactionDispatch, setIsLoading, textMatchers, minAmount, dates } = useApp();
  const [ fileToParse, setFileToParse ] = useState();

  useEffect(() => {
    let isMounted = true;
    
    const parseFile = async (file) => {
      try {
        const parsedTransactions = await new Promise((resolve, reject) => {
          setInterval(() => {
            Papa.parse(file, {
              header: true,
              complete: results => resolve(results.data),
              error: err => reject(err),
            });
          }, 600);
        });

        if(isMounted) {
          transactionDispatch({ type: 'SET_TRANSACTIONS', payload: {
            transactions: parsedTransactions,
            context: { textMatchers, minAmount, dates } 
          }});
        }
      } catch(err) {
        console.error("Parse error:", err);
      } finally {
        if(isMounted) setIsLoading(false);
      }
    } 

    if(fileToParse) {
      parseFile(fileToParse);
    }
    
    return () => isMounted = false
  },[fileToParse]);

  return { setFileToParse };
}