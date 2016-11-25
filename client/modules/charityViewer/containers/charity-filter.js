import CharityFilter from "../components/charity-filter";
import framework from "nqm-app-framework";
const {dataLoader} = framework;
import TDXApi from "nqm-api-tdx/client-api";

// Loads the parent resource from the TDX.
function dataMapper({connectionManager, resourceId}, onData) {
  const config = {
    commandHost: Meteor.settings.public.commandHost || "https://cmd.nq-m.com",
    queryHost: Meteor.settings.public.queryHost || "https://q.nq-m.com",
    accessToken: connectionManager.authToken,
  };
  const api = new TDXApi(config);

  api.getDistinct(resourceId, "classes_names", null, null, {limit: 1000}, (err, response) => {
    if (err) console.log("Could not get list of charity types: ", err.message);
    else onData(null, {charityClasses: response.data});
  });
}

export const stateMapper = (state) => ({
  charityTypes: state.charityViewer.charityTypes,
});

export const depsMapper = (context, actions) => ({
  store: context.store,
  connectionManager: context.connectionManager,
  FlowRouter: context.FlowRouter,
  addCharityType: actions.charityViewer.addCharityType,
  removeCharityType: actions.charityViewer.removeCharityType,
});

export default dataLoader.merge(
  dataLoader.compose(dataMapper, {propsToWatch: ["resourceId"]}),
  dataLoader.compose(dataLoader.reduxFactory(stateMapper)),
  dataLoader.useDeps(depsMapper)
)(CharityFilter);
