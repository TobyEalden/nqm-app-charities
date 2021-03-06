import {createApp} from "mantra-core";
import {combineReducers} from "redux";
import framework from "nqm-app-framework";
import initContext from "./configs/context";

// modules
import frameworkModule from "nqm-app-framework/modules/core";
import coreModule from "./modules/core";
import charityModule from "./modules/charityViewer";

// reducers
const reducer = combineReducers({
  ...frameworkModule.reducers,
  ...coreModule.reducers,
  ...charityModule.reducers,
});

// init context
const context = initContext({framework, reducer});

// create app
const app = createApp(context);

// load modules
app.loadModule(frameworkModule);
app.loadModule(coreModule);
app.loadModule(charityModule);

// go
app.init();
