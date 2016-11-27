import React from "react";
import {Map, TileLayer, GeoJSON} from "react-leaflet";

class LeafletMap extends React.Component {
  constructor(props) {
    super(props);

    this.toggleCounty = this.toggleCounty.bind(this);
    this.onEachFeature = this.onEachFeature.bind(this);
    this.styleGeojson = this.styleGeojson.bind(this);
  }

  toggleCounty(event) {
    const countyId = event.target.feature.properties.CTYUA15CD;
    if (this.props.counties.indexOf(countyId) !== -1) this.props.removeCounty(countyId);
    else this.props.addCounty(countyId);
  }

  onEachFeature(feature, layer) {
    layer.on({
      click: this.toggleCounty,
    });
  }

  styleGeojson(feature) {
    const countyId = feature.properties.CTYUA15CD;
    const opacity = (feature.properties.totalCharities / 100 > 1) ? 0.5 : feature.properties.totalCharities / 200;
    if (this.props.counties.indexOf(countyId) !== -1) return {color: "#0000FF", weight: 3, fillOpacity: opacity};
    else return {color: "#0000FF", weight: 1, fillOpacity: opacity};
  }

  render() {
    const leafletUsername = Meteor.settings.public.mapUsername || "nqmivan.12id4bh0";
    const leafletPassword = Meteor.settings.public.mapPassword || "pk.eyJ1IjoibnFtaXZhbiIsImEiOiJjaXJsendoMHMwMDM3aGtuaGh2bWt5OXRvIn0.6iCk2i96NUucsyDlbnVtiA";
    const url = `https://api.tiles.mapbox.com/v4/${leafletUsername}/{z}/{x}/{y}.png?access_token=${leafletPassword}`;

    return (
      <div className={this.props.className}>
        <Map center={[54.251186, -4.463196]} zoom={6} >
          <TileLayer
            url={url}
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
          />
          <GeoJSON
            data={this.props.geojson}
            style={this.styleGeojson}
            onEachFeature={this.onEachFeature}
          />
        </Map>
      </div>
    );
  }

}

LeafletMap.propTypes = {
  addCounty: React.PropTypes.func,
  className: React.PropTypes.string.isRequired,
  counties: React.PropTypes.array,
  geojson: React.PropTypes.array.isRequired,
  removeCounty: React.PropTypes.func,
};

export default LeafletMap;
