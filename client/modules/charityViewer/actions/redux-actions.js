import * as actionTypes from "./action-types";

export const addCounty = function(countyId) {
  return {type: actionTypes.ADD_CNTY, countyId};
};

export const removeCounty = function(countyId) {
  return {type: actionTypes.REMOVE_CNTY, countyId};
};

export const addCharityType = function(charityType) {
  return {type: actionTypes.ADD_CHARITY_TYPE, charityType};
};

export const removeCharityType = function(charityType) {
  return {type: actionTypes.REMOVE_CHARITY_TYPE, charityType};
};
