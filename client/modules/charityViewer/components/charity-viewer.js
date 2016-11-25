import React from "react/react";

import LeafletMap from "../containers/leaflet-map";
import CharityList from "../containers/charity-list";
import CharityFilter from "../containers/charity-filter";

class CharityViewer extends React.Component {

  render() {
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

    let filter = {};
    if (this.props.charityTypes.length > 0) filter.classes_names = {"$in": this.props.charityTypes};
    if (this.props.counties.length > 0) filter.countyIds = {"$in": this.props.counties};

    return (
      <div style={this.props.style}>
        <LeafletMap style={styles.map} resourceId="S1xF2A9rfe" />
        <CharityList style={styles.list} resourceId="Hkx-11oBGl" filter={filter} />
        <CharityFilter style={styles.filter} resourceId="Hkx-11oBGl" />
      </div>
    );
  }
}

CharityViewer.propTypes = {
  charityTypes: React.PropTypes.array.isRequired,
  counties: React.PropTypes.array.isRequired,
  style: React.PropTypes.object.isRequired,
};

export default CharityViewer;
