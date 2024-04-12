import React from "react";
import chairImage from "../../../assets/images/brown-chair.jpeg";
import PropTypes from "prop-types";

const Chair = ({ width, height, rotation }) => {
	return (
		<img
			className="chair"
			src={chairImage}
			alt="Chair"
			style={{
				width: width,
				height: height,
				borderRadius: "10px",
				transform: `rotate(${rotation}deg)`, // Rotate the image by the degree specified in rotation prop
			}}
		/>
	);
};

Chair.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	rotation: PropTypes.number,
};

Chair.defaultProps = {
	width: "50px",
	height: "50px",
	rotation: 0,
};

export default Chair;
