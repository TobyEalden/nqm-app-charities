import React from "react";
import injectSheet from "react-jss";
import {List, ListItem} from "material-ui/List";

const styles = {
  list: {
    fontSize: "75%",
  },
};

class CharityList extends React.Component {
  render() {
    const {sheet: {classes}} = this.props;
    const charities = _.map(this.props.charities, (charity) => {
      return <ListItem key={charity.name} primaryText={charity.name} />;
    });

    return (
      <div className={this.props.className}>
        <List className={classes.list} >
          {charities}
        </List>
      </div>
    );
  }
}

CharityList.propTypes = {
  charities: React.PropTypes.array.isRequired,
  className: React.PropTypes.string.isRequired,
  sheet: React.PropTypes.object.isRequired,
};

export default injectSheet(styles)(CharityList);
