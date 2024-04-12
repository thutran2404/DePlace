import React from "react";
import tableImage from "../../../assets/images/table.jpeg";
import PropTypes from "prop-types";

const Table = ({ width, height, rotation }) => {
	return (
		<img
			className="table"
			src={tableImage}
			alt="Table"
			style={{
				width: width,
				height: height,
				borderRadius: "8px",
				border: "1.5px solid black",
				transform: `rotate(${rotation}deg)`, // Rotate the image by the degree specified in rotation prop
			}}
		/>
	);
};

Table.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	rotation: PropTypes.number,
};

Table.defaultProps = {
	width: "70px",
	height: "120px",
	rotation: 0,
};

export default Table;
