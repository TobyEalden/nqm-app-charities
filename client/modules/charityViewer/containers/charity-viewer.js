import CharityViewer from "../components/charity-viewer";
import framework from "nqm-app-framework";
const {dataLoader} = framework;

export const stateMapper = (state) => ({
  counties: state.charityViewer.counties,
  charityTypes: state.charityViewer.charityTypes,
});

export const depsMapper = (context) => ({
  store: context.store,
  connectionManager: context.connectionManager,
  FlowRouter: context.FlowRouter,
});

export default dataLoader.merge(
  dataLoader.compose(dataLoader.reduxFactory(stateMapper)),
  dataLoader.useDeps(depsMapper)
)(CharityViewer);
