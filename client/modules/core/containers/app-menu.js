import {dataLoader} from "nqm-app-framework";
import AppMenu from "../components/app-menu";

export const stateMapper = (state) => ({
});

export const depsMapper = (context) => ({
  store: context.store,
});

export default dataLoader.merge(
  dataLoader.compose(dataLoader.reduxFactory(stateMapper)),
  dataLoader.useDeps(depsMapper)
)(AppMenu);
