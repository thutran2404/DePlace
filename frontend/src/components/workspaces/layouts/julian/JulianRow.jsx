import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import JulianCell from "./JulianCell";

const JulianRow = ({ cells, component: Component, positions }) => {
	console.log("here", positions);
	return (
		<Row>
			{Array.from({ length: cells }, (_, index) => (
				<JulianCell key={index}>
					{positions && positions.includes(index) && Component ? (
						<Component />
					) : (
						"Empty"
					)}
				</JulianCell>
			))}
		</Row>
	);
};

JulianRow.propTypes = {
	cells: PropTypes.number.isRequired,
	component: PropTypes.elementType,
	positions: PropTypes.arrayOf(PropTypes.number),
};

export default JulianRow;
