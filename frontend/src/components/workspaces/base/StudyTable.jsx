import React from "react";
import tableImage from "../../../assets/images/table.jpeg";
import PropTypes from "prop-types";

const StudyTable = ({ width, height, rotation }) => {
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
				display: "block",
				transform: `rotate(${rotation}deg)`, // Rotate the image by the degree specified in rotation prop
			}}
		/>
	);
};

StudyTable.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	rotation: PropTypes.number,
};

StudyTable.defaultProps = {
	width: "150px",
	height: "12px",
	rotation: 0,
};

export default StudyTable;
