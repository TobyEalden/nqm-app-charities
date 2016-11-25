import CharityList from "../components/charity-list";
import framework from "nqm-app-framework";
const {dataLoader} = framework;
import TDXApi from "nqm-api-tdx/client-api";

// Loads the parent resource from the TDX.
function dataMapper({connectionManager, resourceId, filter}, onData) {
  const config = {
    commandHost: Meteor.settings.public.commandHost || "https://cmd.nq-m.com",
    queryHost: Meteor.settings.public.queryHost || "https://q.nq-m.com",
    accessToken: connectionManager.authToken,
  };
  const api = new TDXApi(config);

  api.getDatasetData(resourceId, filter, null, {limit: 50, sort: {employees: -1}}, (err, response) => {
    if (err) console.log("Could not get charity data: ", err.message);
    else onData(null, {charities: response.data});
  });
}

export const depsMapper = (context) => ({
  store: context.store,
  connectionManager: context.connectionManager,
  FlowRouter: context.FlowRouter,
});

export default dataLoader.merge(
  dataLoader.compose(dataMapper, {propsToWatch: ["filter"]}),
  dataLoader.useDeps(depsMapper)
)(CharityList);
