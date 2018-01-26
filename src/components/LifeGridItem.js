import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { activateCell } from "../actions/index";

const LifeGridItem = ({ x, y, value, activateCell }) => {
  const handleClick = () => {
    console.log(`passing activateCell with x=${x} and y=${y}`);
    activateCell(x,y)
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

export default connect(null, mapDispatchToProps)(LifeGridItem);
