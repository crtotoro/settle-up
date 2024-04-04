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
