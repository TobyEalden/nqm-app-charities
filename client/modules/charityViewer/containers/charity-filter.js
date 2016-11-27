import CharityFilter from "../components/charity-filter";
import framework from "nqm-app-framework";
const {dataLoader} = framework;

// Loads the parent resource from the TDX.
function dataMapper({connectionManager, resourceId, Meteor}, onData) {
  connectionManager.tdxApi.getDistinct(resourceId, "classes_names", null, null, {limit: 1000}, (err, response) => {
    if (err) {
      console.log("Could not get list of charity types: ", err.message);  // eslint-disable-line no-console
    } else {
      onData(null, {charityClasses: response.data});
    }
  });
}

export const stateMapper = (state) => ({
  charityTypes: state.charityViewer.charityTypes,
});

export const depsMapper = (context, actions) => ({
  store: context.store,
  Meteor: context.Meteor,
  connectionManager: context.connectionManager,
  addCharityType: actions.charityViewer.addCharityType,
  removeCharityType: actions.charityViewer.removeCharityType,
});

export default dataLoader.merge(
  dataLoader.compose(dataMapper, {propsToWatch: ["resourceId"]}),
  dataLoader.compose(dataLoader.reduxFactory(stateMapper)),
  dataLoader.useDeps(depsMapper)
)(CharityFilter);
