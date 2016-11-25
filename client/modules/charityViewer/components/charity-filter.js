import React from "react/react";
import {List, ListItem} from "material-ui/List";

class CharityFilter extends React.Component {

  toggleType(charityType) {
    if (this.props.charityTypes.indexOf(charityType) !== -1) this.props.removeCharityType(charityType);
    else this.props.addCharityType(charityType);
  }

  render() {
    const typeList = _.map(this.props.charityClasses, (charityClass) => {
      const active = {
        color: this.props.charityTypes.indexOf(charityClass) !== -1 ? "#0000FF" : "#000000",
      };
      return (
        <ListItem
          key={charityClass}
          primaryText={charityClass}
          onTouchTap={this.toggleType.bind(this, charityClass)}
          style={active}
        />
      );
    });

    const styles = {
      list: {
        fontSize: "75%",
      },
    };

    return (
      <div style={this.props.style}>
        <List style={styles.list} >
          {typeList}
        </List>
      </div>
    );
  }
}

CharityFilter.propTypes = {
  addCharityType: React.PropTypes.func.isRequired,
  charityClasses: React.PropTypes.array.isRequired,
  charityTypes: React.PropTypes.array.isRequired,
  removeCharityType: React.PropTypes.func.isRequired,
  style: React.PropTypes.object.isRequired,
};

export default CharityFilter;
