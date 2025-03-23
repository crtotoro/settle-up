import { randomUUID } from "../../utils/helpers";
import configData from "../../config.json"

const defaultConfig = {
  "initInclude": [],
  "initExclude": [],
  "initVerify": []
};

const config = configData || defaultConfig;

const mapInitMatchers = matchers => {
  return matchers.map(matcher => ({ id: randomUUID(), text: matcher }));
}

export const initMatchers = { 
  include: mapInitMatchers(config.initInclude), 
  exclude: mapInitMatchers(config.initExclude), 
  verify: mapInitMatchers(config.initVerify)
};