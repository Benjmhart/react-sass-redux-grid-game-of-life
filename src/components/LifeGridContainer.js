import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { setMax } from '../actions/index';

class LifeGridContainer extends Component {
	componentDidMount() {
		const { clientWidth, clientHeight } = this.el;
		const w = Math.floor(clientWidth / 20);
		const h = Math.floor(clientHeight / 20);
		this.props.setMax(w, h);

	}
	render() {
		return (<div className="life-grid-container" ref={el => this.el = el}>this will be a grid</div>)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setMax }, dispatch);
}

export default connect(null, mapDispatchToProps)(LifeGridContainer);
