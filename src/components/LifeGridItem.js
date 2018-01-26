import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { activateCell } from "../actions/index";

const LifeGridItem = ({ x, y, value, activateCell }) => {
  const handleClick = () => {
    activateCell(x, y);
  };

  let classes;
  switch (value) {
    case 2: {
      classes = "life-grid-item live";
      break;
    }
    case 1: {
      classes = "life-grid-item new";
      break;
    }
    default: {
      classes = "life-grid-item dead";
      break;
    }
  }
  return <div className={classes} onClick={() => handleClick()} />;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ activateCell }, dispatch);
}
LifeGridItem.propTypes = {
  activateCell: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};
export default connect(null, mapDispatchToProps)(LifeGridItem);
