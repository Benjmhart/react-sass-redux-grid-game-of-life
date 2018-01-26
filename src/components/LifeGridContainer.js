import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { setDims } from "../actions/index";
import LifeGridItem from "./LifeGridItem";

class LifeGridContainer extends Component {
  constructor(props) {
    super(props);
    this.redermineSize = this.redetermineSize.bind(this);
  }

  componentDidMount() {
    this.redetermineSize();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => this.redetermineSize());
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      (nextProps.useMax !== this.props.useMax ||
        nextProps.cellSize !== this.props.cellSize) &&
      nextProps.useMax === true
    ) {
      this.redermineSize(true);
    }
  }
  redetermineSize(max = this.props.useMax) {
    if (this.el) {
      const { clientWidth, clientHeight, offsetTop } = this.el;

      const w = Math.floor(clientWidth / (this.props.cellSize + 2));
      const h = Math.floor(
        (clientHeight - offsetTop) / (this.props.cellSize + 2)
      );
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
    const nodelist = this.props.lifeGrid.map((row, x) =>
      row.map((cell, y) => (
        <LifeGridItem key={Symbol(x + y)} x={x} y={y} value={cell} />
      ))
    );
    return nodelist;
  }
  render() {
    const style = {
      position: "fixed",
      width: "100%",
      height: "100%",
      display: "grid",
      gridTemplateColumns: `repeat(${this.props.dims.width}, minmax(${this.props
        .cellSize - 2}px, 1fr))`,
      gridTemplateRows: `repeat(${this.props.dims.height}, minmax(${this.props
        .cellSize - 10}px, 1fr))`,
      gridGap: "1px"
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
  lifeGrid: PropTypes.arrayOf(PropTypes.number).isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(LifeGridContainer);
