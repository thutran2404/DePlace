import React from "react";
import Container from "react-bootstrap/Container";
import JulianRow from "./JulianRow";
import MeetingSet from "../../sets/MeetingSet";
import ClassRoom from "../../rooms/ClassRoom";
import styles from "./Julian.module.css";

const Julian = () => {
	const rows = 5;
	const cols = 5;

	const layoutPositions = {
		0: { 0: ClassRoom },
		1: { 0: ClassRoom, 2: MeetingSet, 4: MeetingSet },
		3: { 0: ClassRoom },
		4: { 0: ClassRoom, 2: MeetingSet, 4: MeetingSet },
	};

	return (
		<>
			<div>Julian</div>
			<Container className={styles.julianContainer}>
				{Array.from({ length: rows }, (_, rowIndex) => (
					<JulianRow
						key={rowIndex}
						cells={cols}
						renderComponent={colIndex => {
							const ComponentToRender = layoutPositions[rowIndex]?.[colIndex];
							return ComponentToRender ? <ComponentToRender /> : null;
						}}
					/>
				))}
			</Container>
		</>
	);
};

export default Julian;
