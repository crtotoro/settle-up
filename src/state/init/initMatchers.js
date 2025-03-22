import { randomUUID } from "../../utils/helpers";

const defaultConfig = {
  "initInclude": [],
  "initExclude": [],
  "initVerify": []
};

let config
try{
  config = require('../../config.json')
} catch(error) {
  console.warn("Config file not found or invalid. Using default configuration.")
  config = defaultConfig;
}

const initInclude = config.initInclude;
const initExclude = config.initExclude;
const initVerify = config.initVerify;

const mapInitMatchers = matchers => {
  return matchers.map(matcher => ({ id: randomUUID(), text: matcher }));
}

export const initMatchers = { 
  include: mapInitMatchers(initInclude), 
  exclude: mapInitMatchers(initExclude), 
  verify: mapInitMatchers(initVerify)
};