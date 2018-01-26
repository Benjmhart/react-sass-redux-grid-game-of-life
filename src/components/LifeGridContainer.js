import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
      console.log("LifeGridContainer will receive useMax prop true");
      this.redermineSize(true);
    }
  }
  redetermineSize(max = this.props.useMax) {
    console.log("redetermineSize Fired");
    if (this.el) {
      const { clientWidth, clientHeight, offsetTop } = this.el;

      const w = Math.floor(clientWidth / this.props.cellSize);
      const h = Math.floor((clientHeight - offsetTop) / this.props.cellSize);
      console.log(`redetermineSize finds height: ${h} and width: ${w}`);
      if (max) {
        console.log("triggering SetDims with max dims");
        this.props.setDims(h, w, this.props.density);
      } else {
        console.log("triggering SetDims with user dims");
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
        <LifeGridItem key={`${x}, ${y}`} x={x} y={y} value={cell} />
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
        .cellSize - 10}px, ${this.props.cellSize + 1}px))`,
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
// proptypes
function mapStateToProps({ useMax, dims, lifeGrid, density, cellSize }) {
  return { useMax, dims, lifeGrid, density, cellSize };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setDims }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LifeGridContainer);
