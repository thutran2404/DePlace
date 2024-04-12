import React from "react";
import StudySet from "../sets/StudySet";
import { Container } from "react-bootstrap";
import "./ClassRoom.css";

const ClassRoom = () => (
	<Container className="classroomContainer">
		<StudySet />
		<br />
		<StudySet />
	</Container>
);

export default ClassRoom;
