import React from "react/react";
import {List, ListItem} from "material-ui/List";
import injectSheet from "react-jss";

const styles = {
  list: {
    fontSize: "75%",
  },
};

class CharityFilter extends React.Component {

  toggleType(charityType) {
    if (this.props.charityTypes.indexOf(charityType) !== -1) this.props.removeCharityType(charityType);
    else this.props.addCharityType(charityType);
  }

  render() {
    const {sheet: {classes}} = this.props;
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

    return (
      <div className={this.props.className}>
        <List className={classes.list} >
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
  className: React.PropTypes.string.isRequired,
  removeCharityType: React.PropTypes.func.isRequired,
  sheet: React.PropTypes.object.isRequired,
};

export default injectSheet(styles)(CharityFilter);
