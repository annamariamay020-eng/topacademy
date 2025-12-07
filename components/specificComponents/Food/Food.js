import React, { Component } from "react";

 export default class Location extends Component {
 constructor(props) {
 super(props);
 }
 render() {
 return (
 <div>
 Food:{this.props.blok.title}</div>
 );
 }
 }

