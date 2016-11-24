import React from "react";
import {Map, TileLayer, GeoJSON} from "react-leaflet";

class LeafletMap extends React.Component {

  render() {
    const leafletUsername = Meteor.settings.public.mapUsername || "nqmivan.12id4bh0";
    const leafletPassword = Meteor.settings.public.mapPassword || "pk.eyJ1IjoibnFtaXZhbiIsImEiOiJjaXJsendoMHMwMDM3aGtuaGh2bWt5OXRvIn0.6iCk2i96NUucsyDlbnVtiA";
    const url = `https://api.tiles.mapbox.com/v4/${leafletUsername}/{z}/{x}/{y}.png?access_token=${leafletPassword}`;

    return (
      <div style={this.props.style}>
        <Map center={[54.251186, -4.463196]} zoom={6} >
          <TileLayer
            url={url}
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
          />
          <GeoJSON
            data={this.props.geojson}
          />
        </Map>
      </div>
    );
  }

}

LeafletMap.propTypes = {
  geojson: React.PropTypes.array.isRequired,
  style: React.PropTypes.object.isRequired,
};

export default LeafletMap;
