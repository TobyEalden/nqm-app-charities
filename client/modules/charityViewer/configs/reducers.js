import {ADD_CNTY, REMOVE_CNTY} from "../actions/action-types";

export function charityViewer(state = {counties: []}, action) {
  switch (action.type) {
    case ADD_CNTY:
      return Object.assign({}, state, {counties: [...state.counties, action.countyId]});
    case REMOVE_CNTY:
      const indexToRemove = state.counties.indexOf(action.countyId);
      return Object.assign({}, state, {
        counties: [...state.counties.slice(0, indexToRemove), ...state.counties.slice(indexToRemove + 1)]
      });
    default:
      return state;
  }
}
