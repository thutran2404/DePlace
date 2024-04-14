import React from "react";
import PropTypes from "prop-types";
import "./Obstacle.css";

const Obstacle = ({ height, width, left, right, top, bottom }) => {
	const style = {
		height: `${height}px`,
		width: `${width}px`,
		left: `${left}px`,
		right: `${right}px`,
		top: `${top}px`,
		bottom: `${bottom}px`,
	};

	return (
		<div className="obstacle" style={style}>
			Obstacle
		</div>
	);
};

Obstacle.propTypes = {
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	left: PropTypes.number,
	right: PropTypes.number,
	top: PropTypes.number,
	bottom: PropTypes.number,
};

Obstacle.defaultProps = {
	height: 100,
	width: 100,
};

export default Obstacle;
