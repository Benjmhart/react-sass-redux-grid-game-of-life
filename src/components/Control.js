import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {
  changeRate,
  toggleUseMax,
  setDims,
  randomGrid,
  setDensity,
  clearGrid,
  setCellSize,
  resetCycles,
  turnGameOn,
  turnGameOff,
  incrementCycles
} from "../actions/index";


/*
GENERAL:
this component is used to handle all of the controls on the header, it is also 
responsible  for running the timer which fires INCREMENT_CYCLE actions which 
allows the game of life to progress.
*/

class Control extends Component {
  constructor(props) {
    super(props);
    this.timer = this.timer.bind(this);
    this.state = { intervalId: "" };
  }
  componentDidMount() {
    //starts the game onload
    this.timer(this.props.rate);
  }
  componentWillReceiveProps(nextProps) {
    //restarts the timer if the user changes the rate
    if (nextProps.rate !== this.props.rate) {
      clearInterval(this.state.intervalId);
      this.timer(nextProps.rate);
    }
  }

  componentWillUnmount() {
    //removes timer/stops game
    clearInterval(this.state.intervalId);
  }

  timer(rate) {
    //constructs the timer and sticks it into component state so it can be 
    const intervalId = setInterval(() => {
      if (this.props.gameOn) {
        this.props.incrementCycles();
      }
    }, rate);

    this.setState({ intervalId });
  }
  render() {
    //big destructure
    const {
      useMax,
      dims,
      rate,
      density,
      cellSize,
      changeRate,
      lifeGrid,
      toggleUseMax,
      setDims,
      randomGrid,
      setDensity,
      clearGrid,
      setCellSize,
      resetCycles,
      turnGameOn,
      turnGameOff
    } = this.props;

    return (
      <div className="control">
        <h4>Controls</h4>
        <label htmlFor="height">
          Height
          <input
            id="height"
            className="control-field"
            type="number"
            value={dims.height}
            disabled={useMax}
            onChange={e => setDims(Number(e.target.value), dims.width, density)}
          />
        </label>
        <label htmlFor="Width">
          Width
          <input
            id="Width"
            className="control-field"
            type="number"
            value={dims.width}
            disabled={useMax}
            onChange={e =>
              setDims(dims.height, Number(e.target.value), density)
            }
          />
        </label>
        <label htmlFor="usemax">
          Use Max
          <input
            id="usemax"
            className="control-field"
            type="checkbox"
            checked={useMax}
            onChange={() => toggleUseMax()}
          />
        </label>
        <label htmlFor="Rate">
          Rate
          <input
            id="Rate"
            className="control-field"
            type="number"
            value={rate}
            onChange={e => changeRate(Number(e.target.value))}
          />
        </label>
        <button onClick={() => {
          turnGameOn();
          this.timer(rate);
          }}
        >Start</button>
        <button onClick={() => {
            clearInterval(this.state.intervalId);
            turnGameOff();
          }}
        >Stop</button>
        <button onClick={() => clearGrid()}>Clear</button>
        <button onClick={() => resetCycles()}>Reset</button>
        <button onClick={() => randomGrid(lifeGrid, density)}>RANDOM</button>
        <label htmlFor="density">
          Density
          <input
            id="density"
            className="control-field"
            type="number"
            value={density}
            onChange={e => setDensity(Number(e.target.value))}
          />
        </label>
        <label htmlFor="cellSize">
          Cell Size
          <input
            id="cellSize"
            className="control-field"
            type="number"
            value={cellSize}
            onChange={e => setCellSize(Number(e.target.value))}
          />
        </label>
        <p>cycles: {this.props.cycles}</p>
      </div>
    );
  }
}

function mapStateToProps({
  useMax,
  dims,
  rate,
  density,
  cellSize,
  cycles,
  lifeGrid,
  gameOn
}) {
  return { useMax, dims, rate, density, cellSize, cycles, lifeGrid, gameOn };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeRate,
      toggleUseMax,
      setDims,
      randomGrid,
      setDensity,
      clearGrid,
      setCellSize,
      resetCycles,
      turnGameOn,
      turnGameOff,
      incrementCycles
    },
    dispatch
  );
}

Control.propTypes = {
  changeRate: PropTypes.func.isRequired,
  toggleUseMax: PropTypes.func.isRequired,
  setDims: PropTypes.func.isRequired,
  randomGrid: PropTypes.func.isRequired,
  setDensity: PropTypes.func.isRequired,
  clearGrid: PropTypes.func.isRequired,
  setCellSize: PropTypes.func.isRequired,
  resetCycles: PropTypes.func.isRequired,
  turnGameOn: PropTypes.func.isRequired,
  turnGameOff: PropTypes.func.isRequired,
  incrementCycles: PropTypes.func.isRequired,
  useMax: PropTypes.bool.isRequired,
  dims: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }).isRequired,
  rate: PropTypes.number.isRequired,
  density: PropTypes.number.isRequired,
  cellSize: PropTypes.number.isRequired,
  cycles: PropTypes.number.isRequired,
  lifeGrid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  gameOn: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Control);
