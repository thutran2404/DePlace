import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import classNames from "classnames";
import styles from "./Julian.module.css";

const JulianCell = ({ children }) => (
	<Col
		className={classNames(
			styles.customCol,
			"d-flex",
			"justify-content-center",
			"align-items-center",
		)}
	>
		{children || "Empty"}
	</Col>
);

JulianCell.propTypes = {
	children: PropTypes.node,
};

export default JulianCell;
