import { randomUUID } from "../../utils/helpers";

export default function matcherReducer(state, action) {
  switch(action.type) {
    case 'INCLUDE_ADD': {
      const { include } = state;
      const { matchers } = include;

      return { ...state, 
        include: { ...include, 
          matchers: [ ...matchers, { id: randomUUID() , text: action.payload } ]
      }};
    }
    case 'INCLUDE_REMOVE': {
      const { include } = state;
      const { matchers } = include;
      
      return { ...state, 
        include: { ...include, 
          matchers: [ ...matchers ].filter(matcher => matcher.id !== action.payload)
      }};
    }
    case 'EXCLUDE_ADD': {
      const { exclude } = state;
      const { matchers } = exclude;

      return { ...state, 
        exclude: { ...exclude, 
          matchers: [ ...matchers, { id: randomUUID() , text: action.payload } ]
      }};
    }
    case 'EXCLUDE_REMOVE': {
      const { exclude } = state;
      const { matchers } = exclude;
      
      return { ...state, 
        exclude: { ...exclude, 
          matchers: [ ...matchers ].filter(matcher => matcher.id !== action.payload)
      }};
    }
    case 'VERIFY_ADD': {
      const { verify } = state;
      const { matchers } = verify;

      return { ...state, 
        verify: { ...verify, 
          matchers: [ ...matchers, { id: randomUUID() , text: action.payload } ]
      }};
    }
    case 'VERIFY_REMOVE': {
      const { verify } = state;
      const { matchers } = verify;
      
      return { ...state, 
        verify: { ...verify, 
          matchers: [ ...matchers ].filter(matcher => matcher.id !== action.payload)
      }};
    }
    default: {
      return state;
    }
  }
}