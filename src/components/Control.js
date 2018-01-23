import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  changeRate,
  toggleUseMax,
  setWidth,
  setHeight
} from "../actions/index";

class Control extends Component {
  render() {
    // variables dependant on useMax value - use ternaries

    const {
      useMax,
      height,
      width,
      rate,
      changeRate,
      toggleUseMax,
      setWidth,
      setHeight
    } = this.props;

    return (
      <div className="control">
        <h4>Controls</h4>
        <label>Height</label>
        <input
          name="height"
          type="number"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
        <label>Width</label>
        <input
          name="Width"
          type="number"
          value={width}
          onChange={e => setWidth(e.target.value)}
        />
        <label>Use Max</label>
        <input
          name="usemax"
          type="checkbox"
          checked={useMax}
          onChange={e => toggleUseMax()}
        />
        <label>Rate</label>
        <input
          name="Rate"
          type="number"
          value={rate}
          onChange={e => changeRate(e.target.value)}
        />
        <button>Start</button>
        <button>Stop</button>
        <button>Clear</button>
        <button>RANDOM</button>
        <p>cycles: 0</p>
      </div>
    );
  }
}

function mapStateToProps({ maxDims, useMax, height, width, rate }) {
  return {
    maxDims,
    useMax,
    height,
    width,
    rate
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeRate, toggleUseMax, setWidth, setHeight },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);
