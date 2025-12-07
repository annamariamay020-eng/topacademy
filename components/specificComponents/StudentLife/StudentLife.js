import React, { Component } from "react";

export default class StudentLife extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				StudentLife:{this.props.blok.title}</div>
		);

	}
}