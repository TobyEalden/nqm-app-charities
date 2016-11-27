import React from "react/react";
import injectSheet from "react-jss";

import LeafletMap from "../containers/leaflet-map";
import CharityList from "../containers/charity-list";
import CharityFilter from "../containers/charity-filter";

const styles = {
  map: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  list: {
    position: "fixed",
    right: 0,
    top: 200,
    zIndex: 999,
  },
  filter: {
    position: "fixed",
    left: 200,
    top: 200,
    zIndex: 999,
  },
};

class CharityViewer extends React.Component {
  render() {
    const {sheet: {classes}} = this.props;
    const filter = {};
    if (this.props.charityTypes.length > 0) filter.classes_names = {"$all": this.props.charityTypes};
    if (this.props.counties.length > 0) filter.countyIds = {"$all": this.props.counties};

    return (
      <div style={this.props.style}>
        <LeafletMap className={classes.map} resourceId="S1xF2A9rfe" />
        <CharityList className={classes.list} resourceId="Hkx-11oBGl" filter={filter} />
        <CharityFilter className={classes.filter} resourceId="Hkx-11oBGl" />
      </div>
    );
  }
}

CharityViewer.propTypes = {
  charityTypes: React.PropTypes.array.isRequired,
  counties: React.PropTypes.array.isRequired,
  sheet: React.PropTypes.object.isRequired,
  style: React.PropTypes.object.isRequired,
};

export default injectSheet(styles)(CharityViewer);
