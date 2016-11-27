import {ADD_CNTY, REMOVE_CNTY, ADD_CHARITY_TYPE, REMOVE_CHARITY_TYPE} from "../actions/action-types";

export function charityViewer(state = {counties: [], charityTypes: []}, action) {
  switch (action.type) {
    case ADD_CNTY:
      return {...state, counties: [...state.counties, action.countyId]};
    case REMOVE_CNTY:
      const countyToRemove = state.counties.indexOf(action.countyId);
      return {...state,
        counties: [...state.counties.slice(0, countyToRemove), ...state.counties.slice(countyToRemove + 1)],
      };
    case ADD_CHARITY_TYPE:
      return {...state, charityTypes: [...state.charityTypes, action.charityType]};
    case REMOVE_CHARITY_TYPE:
      const typeToRemove = state.charityTypes.indexOf(action.charityType);
      return {...state,
        charityTypes: [...state.charityTypes.slice(0, typeToRemove), ...state.charityTypes.slice(typeToRemove + 1)],
      };
    default:
      return state;
  }
}
