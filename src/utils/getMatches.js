import { isAfterGivenDate, isMatch } from './helpers';


const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');
const moment = require('moment');

const recordsDir = path.join(__dirname, 'records');

/* CONFIG ----------------------------------------------------------------------------------------
confirmed includes values which should be added to accounting
verfication needed includes values which need more research to know if they are shared expenses
afterDate is the date after which the process will match records. anything on or before this will be excluded
*/


const confirmedMatchers = [
  'netflix', 
  'hulu',
  'orkin  llc', 
  'town of normal', 
  'utility', 
  'frs decatur', 
  'sams scan-n-go', 
  'nicor gas', 
  'peacock', 
  'paramount', 
  'prime video', 
  'lg cns',
  'prairie oak',
  'amazon digit'
].map(val => val.toLowerCase());

const verificationNeededMatchers = [
  'amazon.com', 
  'menards', 
  'home depot', 
  'apple', 
  'american air', 
  'lowes', 
  'amzn mktp',
  'red raccoon'
].map(val => val.toLowerCase());

const excludeColumns = ["Post Date", "Category", "Type", "Memo"];
const after = "07/07/2023"

// -----------CONFIG ABOVE--------------------------------------------------------------------------

const afterFormatted = after.split('/').join('-');
const afterDate = moment(after);



function adjustAmount(row) {
  // Check if the Amount exists in the row and is a valid number
  if (row["Amount"] && !isNaN(parseFloat(row["Amount"]))) {
    row["Amount"] = (parseFloat(row["Amount"]) * -1).toString(); // Multiply by -1 and update the row's Amount
  }
  return row;
}

function processFile(filename, matchers) {
  return new Promise((resolve, reject) => {
    const data = fs.readFileSync(path.join(recordsDir, filename), 'utf8');
    Papa.parse(data, {
      header: true,
      complete: results => {
        const matchedRows = results.data
          .filter(row => isMatch(row["Description"], matchers) && isAfterGivenDate(row["Transaction Date"], afterDate))
          .map(adjustAmount); // Apply the adjustAmount function to each matched row
        
        // Log the number of matches per file
        console.log(`Matches from ${filename}: ${matchedRows.length}`);
        
        resolve(matchedRows);
      },
      error: error => reject(error)
    });
  });
}


function sortByDateAscending(a, b) {
  const [monthA, dayA, yearA] = a["Transaction Date"].split("/").map(Number);
  const [monthB, dayB, yearB] = b["Transaction Date"].split("/").map(Number);

  if (yearA !== yearB) return yearA - yearB;
  if (monthA !== monthB) return monthA - monthB;
  return dayA - dayB;
}

function filterColumns(row) {
  const filteredRow = { ...row };
  for (const col of excludeColumns) {
    delete filteredRow[col];
  }
  return filteredRow;
}

async function processFiles(matchers) {
  const files = fs.readdirSync(recordsDir).filter(file => file.toLowerCase().endsWith('.csv'));
  let allMatches = [];

  for (const file of files) {
    const matches = await processFile(file, matchers);
    allMatches = allMatches.concat(matches);
  }

  allMatches.sort(sortByDateAscending);
  return allMatches;
}

(async () => {
  const confirmedExpenses = await processFiles(confirmedMatchers);
  const filteredConfirmedExpenses = confirmedExpenses.map(filterColumns); 
  const csvConfirmed = Papa.unparse(filteredConfirmedExpenses);
  fs.writeFileSync(`shared-expenses-since-${afterFormatted}.csv`, csvConfirmed);
  console.log(`Confirmed expenses written to shared-expenses.csv`);

  const verificationNeeded = await processFiles(verificationNeededMatchers);
  const filteredVerificationNeeded = verificationNeeded.map(filterColumns); 
  const csvVerify = Papa.unparse(filteredVerificationNeeded);
  fs.writeFileSync(`verify-transactions-since-${afterFormatted}.csv`, csvVerify);
  console.log(`Expenses needing verification written to verify.csv`);
})();
