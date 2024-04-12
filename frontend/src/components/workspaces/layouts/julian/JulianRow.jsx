import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import JulianCell from "./JulianCell";

const JulianRow = ({ cells, component: Component, position }) => (
	<Row>
		{Array.from({ length: cells }, (_, index) => (
			<JulianCell key={index}>
				{position === index && Component ? <Component /> : "Empty"}
			</JulianCell>
		))}
	</Row>
);

JulianRow.propTypes = {
	cells: PropTypes.number.isRequired,
	component: PropTypes.elementType,
	position: PropTypes.number,
};

export default JulianRow;
