import {dataLoader} from "nqm-app-framework";
import Modal from "../components/modal";

export const depsMapper = (context, actions) => ({
});

export default dataLoader.merge(
  dataLoader.useDeps(depsMapper)
)(Modal);
