import React from "react";
import {List, ListItem} from "material-ui/List";

class CharityList extends React.Component {

  render() {
    const charities = _.map(this.props.charities, (charity) => {
      return <ListItem key={charity.name} primaryText={charity.name} />;
    });

    const styles = {
      list: {
        fontSize: "75%",
      },
    };

    return (
      <div style={this.props.style}>
        <List styles={styles.list} >
          {charities}
        </List>
      </div>
    );
  }
}

CharityList.propTypes = {
  charities: React.PropTypes.array.isRequired,
  style: React.PropTypes.object.isRequired,
};

export default CharityList;
