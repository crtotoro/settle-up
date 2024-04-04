import { randomUUID } from "../../utils/helpers";

const initInclude = [
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
  'amazon digit',
  'chewy'
];
const initVerify = [
  'amazon.com', 
  'menards', 
  'home depot', 
  'apple', 
  'american air', 
  'lowes', 
  'amzn mktp',
  'red raccoon'
];
const initExclude = [
  'automatic payment',
  'payment thank you'
];

const mapInitMatchers = matchers => {
  return matchers.map(matcher => ({ id: randomUUID(), text: matcher }));
}

export const initMatchers = { 
  include: mapInitMatchers(initInclude), 
  exclude: mapInitMatchers(initExclude), 
  verify: mapInitMatchers(initVerify)
};