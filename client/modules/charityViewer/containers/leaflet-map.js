import LeafletMap from "../components/leaflet-map";
import framework from "nqm-app-framework";
const {dataLoader} = framework;

// Loads the parent resource from the TDX.
function dataMapper({connectionManager, resourceId}, onData) {
  connectionManager.tdxApi.getDatasetData(resourceId, null, null, {limit: 1000}, (err, response) => {
    if (err) {
      onData(err);
    } else {
      onData(null, {geojson: response.data});
    }
  });
}

export const stateMapper = (state) => ({
  counties: state.charityViewer.counties,
});

export const depsMapper = (context, actions) => ({
  store: context.store,
  connectionManager: context.connectionManager,
  addCounty: actions.charityViewer.addCounty,
  removeCounty: actions.charityViewer.removeCounty,
});

export default dataLoader.merge(
  dataLoader.compose(dataMapper, {propsToWatch: ["resourceId"]}),
  dataLoader.compose(dataLoader.reduxFactory(stateMapper)),
  dataLoader.useDeps(depsMapper)
)(LeafletMap);
