import Papa from 'papaparse';
import { useState, useEffect } from 'react';
import { useApp } from '../state/context/Context';
import { randomUUID } from '../utils/helpers';

export default function useFileParser() {
  const { setTransactions, setIsLoading } = useApp();
  const [ fileToParse, setFileToParse ] = useState();

  useEffect(() => {
    let isMounted = true;
    
    const parseFile = async (file) => {
      try {
        const result = await new Promise((resolve, reject) => {
          setInterval(() => {
            Papa.parse(file, {
              header: true,
              complete: results => resolve(results.data),
              error: err => reject(err),
            });
          }, 3000);
        });

        if(isMounted) {
          const transactions = result
            .filter(transaction => transaction["Description"])
            .map(transaction => ({...transaction, id: randomUUID()}))
          setTransactions(transactions);
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