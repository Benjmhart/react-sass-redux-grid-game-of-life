import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { activateCell } from "../actions/index";
/* 
General:
This component represents an individual pixel on the LifeGrid,  it does not know 
about the entire array, only the X and Y,  and the numeric value representing 
(0)dead, (1)baby, or (2)alive, which it uses to create it's class and change 
background color.
it does receive a clickhandler method as a prop from redux, which allows the user to turn it on and off)
*/
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
