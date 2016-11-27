import CharityList from "../components/charity-list";
import framework from "nqm-app-framework";
const {dataLoader} = framework;

// Loads the parent resource from the TDX.
function dataMapper({connectionManager, resourceId, filter}, onData) {
  connectionManager.tdxApi.getDatasetData(
    resourceId,
    filter,
    null,
    {limit: 50, sort: {employees: -1}},
    (err, response) => {
      if (err) {
        onData(err);
      } else {
        onData(null, {charities: response.data});
      }
    }
  );
}

export const depsMapper = (context) => ({
  store: context.store,
  connectionManager: context.connectionManager,
});

export default dataLoader.merge(
  dataLoader.compose(dataMapper, {propsToWatch: ["filter"]}),
  dataLoader.useDeps(depsMapper)
)(CharityList);
