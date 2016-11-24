import * as actionTypes from "./action-types";
import * as reduxActions from "./redux-actions";

export default {
  charityViewer: {
    addCounty({store}, countyId) {
      store.dispatch(reduxActions.addCounty(countyId));
    },
    removeCounty({store, FlowRouter}, countyId) {
      store.dispatch(reduxActions.removeCounty(countyId));
    },
  },
};
