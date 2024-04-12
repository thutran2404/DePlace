import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import JulianCell from "./JulianCell";

const JulianRow = ({ cells, renderComponent }) => {
	return (
		<Row>
			{Array.from({ length: cells }, (_, index) => (
				<JulianCell key={index}>{renderComponent(index)}</JulianCell>
			))}
		</Row>
	);
};

JulianRow.propTypes = {
	cells: PropTypes.number.isRequired,
	renderComponent: PropTypes.func.isRequired,
};

export default JulianRow;
