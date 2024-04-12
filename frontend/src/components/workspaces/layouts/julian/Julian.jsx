import React from "react";
import Container from "react-bootstrap/Container";
import JulianRow from "./JulianRow";
import MeetingSet from "../../sets/MeetingSet";
import styles from "./Julian.module.css";

const Julian = () => {
	const rows = 5;
	const cols = 5;

	// Define the positions where MeetingSet should be rendered
	const meetingSetPositions = {
		1: [2, 4], // for row at index 1, place MeetingSet at column indexes 2 and 4
		4: [2, 4], // for row at index 4, place MeetingSet at column indexes 2 and 4
	};

	return (
		<>
			<div>Julian</div>
			<Container className={styles.julianContainer}>
				{Array.from({ length: rows }, (_, rowIndex) => (
					// <JulianRow
					// 	key={rowIndex}
					// 	cells={cols}
					// 	component={rowIndex === 1 ? MeetingSet : null}
					// 	position={1}
					// />

					<JulianRow
						key={rowIndex}
						cells={cols}
						component={meetingSetPositions[rowIndex] ? MeetingSet : null}
						positions={meetingSetPositions[rowIndex] || []}
					/>
				))}
			</Container>
		</>
	);
};

export default Julian;
