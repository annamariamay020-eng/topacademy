import React, { Component } from "react";

export default class Event extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				Event:{this.props.blok.title}
			</div>
		);
	}
}