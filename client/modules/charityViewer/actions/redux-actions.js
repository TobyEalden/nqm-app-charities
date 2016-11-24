import * as actionTypes from "./action-types";

export const addCounty = function(countyId) {
  return {type: actionTypes.ADD_CNTY, countyId};
};

export const removeCounty = function(countyId) {
  return {type: actionTypes.REMOVE_CNTY, countyId};
};
