export const isAfterGivenDate = (dateStr, afterDate) => {
  const date = moment(dateStr, "MM/DD/YYYY");
  return date.isAfter(afterDate);
};

export function isMatch(value, matchers) {
  if (!value) {
    return false;
  }
  const lowercasedValue = value.toLowerCase();
  return matchers.some(matcher => lowercasedValue.includes(matcher));
}