import LeafletMap from "../components/leaflet-map";
import framework from "nqm-app-framework";
const {dataLoader} = framework;
import TDXApi from "nqm-api-tdx";

// Loads the parent resource from the TDX.
function dataMapper({connectionManager, resourceId}, onData) {
  console.log(resourceId);
  const config = {
    commandHost: Meteor.settings.public.commandHost || "https://cmd.nq-m.com",
    queryHost: Meteor.settings.public.queryHost || "https://q.nq-m.com",
    accessToken: connectionManager.authToken,
  };
  const api = new TDXApi(config);

  api.getDatasetData(resourceId, null, null, {limit: 1000}, (err, response) => {
    if (err) {
      console.log("Could not get geojson: ", err.message);
      console.log(err);
    }
    else onData(null, {geojson: response.data});
  });
}

export const stateMapper = (state) => ({
  counties: state.charityViewer.counties,
});

export const depsMapper = (context, actions) => ({
  store: context.store,
  connectionManager: context.connectionManager,
  FlowRouter: context.FlowRouter,
  addCounty: actions.charityViewer.addCounty,
  removeCounty: actions.charityViewer.removeCounty,
});

export default dataLoader.merge(
  dataLoader.compose(dataMapper, {propsToWatch: ["resourceId"]}),
  dataLoader.compose(dataLoader.reduxFactory(stateMapper)),
  dataLoader.useDeps(depsMapper)
)(LeafletMap);
