import React from "react";
import PropTypes from "prop-types";

const Welcome = ({ userName }) => {
	return (
		<div>
			<h1>Welcome, {userName}!</h1>
		</div>
	);
};

Welcome.propTypes = {
	userName: PropTypes.string.isRequired,
};

Welcome.defaultProps = {
	userName: "Anonymous",
};

export default Welcome;
