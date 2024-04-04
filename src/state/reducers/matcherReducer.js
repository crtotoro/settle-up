import { randomUUID } from "../../utils/helpers";

export default function matcherReducer(state, action) {
  switch(action.type) {
    case 'INCLUDE_ADD': {
      return { ...state, 
        include: [ ...state.include, 
          { id: randomUUID() , text: action.payload }
      ]};
    }
    case 'INCLUDE_REMOVE': {
      return { ...state, 
        include: state.include.filter(matcher => matcher.id !== action.payload)
      };
    }
    case 'EXCLUDE_ADD': {
      return { ...state, 
        exclude: [ ...state.exclude, 
          { id: randomUUID() , text: action.payload }
      ]};
    }
    case 'EXCLUDE_REMOVE': {
      return { ...state, 
        exclude: state.exclude.filter(matcher => matcher.id !== action.payload)
      };
    }
    case 'VERIFY_ADD': {
      return { ...state, 
        verify: [ ...state.verify, 
          { id: randomUUID() , text: action.payload }
      ]};
    }
    case 'VERIFY_REMOVE': {
      return { ...state, 
        verify: state.verify.filter(matcher => matcher.id !== action.payload)
      };
    }
    default: {
      return state;
    }
  }
}