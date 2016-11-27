import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import framework from "nqm-app-framework";

// Application pages
import CharityViewer from "../charityViewer/containers/charity-viewer";
import Modal from "../core/containers/modal";

// Application sidebar
import AppSideBar from "./components/app-side-bar";

// Get layout components from the framework
const Layout = framework.ui.Layout;
const ModalLayout = framework.ui.ModalLayout;
const NotFound = framework.ui.NotFound;

export default function(injectDeps, context) {
  const {store} = context;
  const history = syncHistoryWithStore(browserHistory, store);

  const RouterCtx = () => (
    <Router history={history}>
      <Route title="home" path="/" component={Layout}>
        <IndexRoute components={{content: CharityViewer, sideBarContent: AppSideBar}} />
      </Route>
      <Route path="/modal" title="modal" component={ModalLayout}>
        <IndexRoute components={{content: Modal}} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  );

  ReactDOM.render(
    React.createElement(injectDeps(RouterCtx)),
    document.getElementById("render-root")
  );
}
