export const isAfterGivenDate = (dateStr, afterDate) => {
  const date = moment(dateStr, "MM/DD/YYYY");
  return date.isAfter(afterDate);
};

export function isMatch(value, matchers) {
  if (!value) {
    return false;
  }
  const lowercasedValue = value.toLowerCase();
  return matchers.some(matcher => lowercasedValue.includes(matcher.text));
}

export const toTitle = text => text[0].toUpperCase() + text.slice(1); 

export function randomUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const startDateReducer = (startDate, transaction) => {
  const date = transaction["Post Date"];
  return startDate === '' || Date.parse(date) < Date.parse(startDate) ? date : startDate;  
}

export const endDateReducer = (endDate, transaction) => {
  const date = transaction["Post Date"];
  return endDate === '' || Date.parse(date) > Date.parse(endDate) ? date : endDate;  
}

export const totalAmountReducer = (total, transaction) => {
  if(transaction["Amount"])
    return total += transaction["Amount"]
  else return total += 0
}

export const exceedsMin = (amount, minAmount) => minAmount && amount >= minAmount;

const parseDate = dateString => {
  let formattedDate;
  if(dateString.includes('-')) formattedDate = dateString;
  else {
    const parts = dateString.split('/');
    formattedDate = `${parts[2]}-${parts[0]}-${parts[1]}`;
  }
  return Date.parse(formattedDate + 'T00:00:00Z');
}

export const isExcludedByDate = (postDate, dates) => {
  const parsedPostDate = parseDate(postDate);
  if(dates.start && parsedPostDate < parseDate(dates.start)) return true;
  if(dates.end && parsedPostDate > parseDate(dates.end)) {
    console.log(`Excluding Post Date: ${postDate} (${parsedPostDate}) for being greater than end date: ${dates.end} (${Date.parse(dates.end)})`);
    return true;
  }
  return false;
}