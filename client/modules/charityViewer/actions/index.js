import * as actionTypes from "./action-types";
import * as reduxActions from "./redux-actions";

export default {
  charityViewer: {
    addCounty({store}, countyId) {
      store.dispatch(reduxActions.addCounty(countyId));
    },
    removeCounty({store}, countyId) {
      store.dispatch(reduxActions.removeCounty(countyId));
    },
    addCharityType({store}, charityType) {
      store.dispatch(reduxActions.addCharityType(charityType));
    },
    removeCharityType({store}, charityType) {
      store.dispatch(reduxActions.removeCharityType(charityType));
    },
  },
};
