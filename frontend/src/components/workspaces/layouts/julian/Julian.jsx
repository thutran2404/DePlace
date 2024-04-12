import React from "react";
import Container from "react-bootstrap/Container";
import JulianRow from "./JulianRow";
import ClassRoom from "../../rooms/ClassRoom";
import styles from "./Julian.module.css";

const Julian = () => {
	const rows = 5;
	const cols = 5;

	return (
		<>
			<div>Julian</div>
			<Container className={styles.julianContainer}>
				{Array.from({ length: rows }, (_, rowIndex) => (
					<JulianRow
						key={rowIndex}
						cells={cols}
						component={rowIndex === 1 ? ClassRoom : null}
						position={1}
					/>
				))}
			</Container>
		</>
	);
};

export default Julian;
