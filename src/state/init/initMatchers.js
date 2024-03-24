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

const initExclude = [];

const mapInitMatchers = matchers => {
  return matchers.map(matcher => ({ id: crypto.randomUUID(), text: matcher }));
}

export const initMatchers = { 
  include: { type: "include", matchers: mapInitMatchers(initInclude) }, 
  exclude: { type: "exclude", matchers: mapInitMatchers(initExclude) }, 
  verify: { type: "verify", matchers: mapInitMatchers(initVerify) }
};