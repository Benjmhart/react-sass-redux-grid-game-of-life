import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { setDims } from "../actions/index";
import LifeGridItem from "./LifeGridItem";


/* 
GENERAL:
This Component is used to calculate all the information to keep the app responsive 
to the window size, it also contains the grid styling. Ultimately this component 
is responsible for both calculating and rendering the array which the game of life 
runs on.
*/
class LifeGridContainer extends Component {
  constructor(props) {
    super(props);
    this.redermineSize = this.redetermineSize.bind(this);
  }

  componentDidMount() {
    // whenever the window changes size,  set the dimensions for the array that runs the LifeGrid
    this.redetermineSize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => this.redetermineSize());
    }
  }
  componentWillReceiveProps(nextProps) {
    // whenever the user turns useMax on or changes cellsize,  recalculate maximum size
    if (
      (nextProps.useMax !== this.props.useMax ||
        nextProps.cellSize !== this.props.cellSize) &&
      nextProps.useMax === true
    ) {
      this.redermineSize(true);
    }
  }
  
  redetermineSize(max = this.props.useMax) {
    //grabs the height/width of the container fiv and calculates the optimum dimensions for the array
    if (this.el) {
      const { clientWidth, clientHeight, offsetTop } = this.el;

      const w = Math.floor(clientWidth / (this.props.cellSize + 8));
      const h = (Math.floor((clientHeight - offsetTop) / (this.props.cellSize)));
      
      console.log(`new grid created with h:${h} w:${w} built by dividing div height:${clientHeight - offsetTop} comprised of clientheight ${clientHeight} minus ${offsetTop}by cellize with padding: ${this.props.cellSize + 8}`)
      if (max) {
        this.props.setDims(h, w, this.props.density);
      } else {
        this.props.setDims(
          this.props.dims.height,
          this.props.dims.width,
          this.props.density
        );
      }
    }
  }
  renderLifeGrid() {
    //creates a DIV for each item in the LifeGrid array
    const nodelist = this.props.lifeGrid.map((row, x) =>
      row.map((cell, y) => (
        <LifeGridItem key={`${x}-${y}-${new Date().getTime()}`} x={x} y={y} value={cell} />
      ))
    );
    return nodelist;
  }
  render() {
    //creates CSSGrid styling dependant on the dimensions of the LifeGrid Array 
    const style = {
      flex: '1 1 auto',
      width: "100%",
      height: "100%",
      display: "grid",
      gridTemplateColumns: `repeat(${this.props.dims.width}, minmax(${this.props
        .cellSize}px, 1fr))`,
      gridTemplateRows: `repeat(${this.props.dims.height}, minmax(${this.props
        .cellSize - 2}px, 1fr))`,
      gridGap: "1px",
    };
    
    return (
      <div
        style={style}
        className="life-grid-container"
        ref={el => {
          this.el = el;
        }}
      >
        {this.renderLifeGrid()}
      </div>
    );
  }
}

function mapStateToProps({ useMax, dims, lifeGrid, density, cellSize }) {
  return { useMax, dims, lifeGrid, density, cellSize };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setDims }, dispatch);
}

LifeGridContainer.propTypes = {
  setDims: PropTypes.func.isRequired,
  useMax: PropTypes.bool.isRequired,
  dims: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
  }).isRequired,
  density: PropTypes.number.isRequired,
  cellSize: PropTypes.number.isRequired,
  lifeGrid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(LifeGridContainer);
