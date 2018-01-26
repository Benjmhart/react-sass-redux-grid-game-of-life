import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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

class Control extends Component {
  constructor(props) {
    super(props);
    this.timer = this.timer.bind(this)
    this.state = {IntervalId: ''}
  }
  componentDidMount() {
   this.timer(this.props.rate);
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.rate !== this.props.rate){
      clearInterval(this.state.intervalId);
      this.timer(nextProps.rate);
    }
  }
  
  timer(rate) {
    
    const intervalId = setInterval(() =>{
      if (this.props.gameOn){this.props.incrementCycles()}}
      , rate);
    
    this.setState({ intervalId: intervalId })
  }
  render() {
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
        <label>Height</label>
        <input
          name="height"
          className="control-field"
          type="number"
          value={dims.height}
          disabled={useMax}
          onChange={e => setDims(Number(e.target.value), dims.width, density)}
        />
        <label>Width</label>
        <input
          name="Width"
          className="control-field"
          type="number"
          value={dims.width}
          disabled={useMax}
          onChange={e => setDims(dims.height, Number(e.target.value), density)}
        />
        <label>Use Max</label>
        <input
          name="usemax"
          className="control-field"
          type="checkbox"
          checked={useMax}
          onChange={e => toggleUseMax()}
        />
        <label>Rate</label>
        <input
          name="Rate"
          className="control-field"
          type="number"
          value={rate}
          onChange={e => changeRate(Number(e.target.value))}
        />
        <button onClick={() => turnGameOn()}>Start</button>
        <button onClick={() => turnGameOff()}>Stop</button>
        <button onClick={() => clearGrid()}>Clear</button>
        <button onClick={() => resetCycles()}>Reset</button>
        <button onClick={() => randomGrid(lifeGrid, density)}>RANDOM</button>
        <label>Density</label>
        <input
          name="density"
          className="control-field"
          type="number"
          value={density}
          onChange={e => setDensity(Number(e.target.value))}
        />
        <label>Cell Size</label>
        <input
          name="cellSize"
          className="control-field"
          type="number"
          value={cellSize}
          onChange={e => setCellSize(Number(e.target.value))}
        />
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
  return bindActionCreators({ changeRate, toggleUseMax, setDims, randomGrid, setDensity, clearGrid, setCellSize, resetCycles, turnGameOn, turnGameOff, incrementCycles }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);
