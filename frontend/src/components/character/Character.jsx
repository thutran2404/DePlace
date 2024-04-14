import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { HotKeys } from "react-hotkeys";
import "./Character.css";

const keyMap = {
	LEFT: "left",
	RIGHT: "right",
	UP: "up",
	DOWN: "down",
};

const Character = ({ obstaclesData, height, width }) => {
	const roomWidth = 1200;
	const roomHeight = 750;
	const SHIFT = 10;
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const checkIfPositionIsValid = (x, y, obstacles) => {
		const rightEdge = x + width;
		const bottomEdge = y + height;

		// Check if the character's area is out of room boundaries.
		if (x < 0 || y < 0 || rightEdge > roomWidth || bottomEdge > roomHeight) {
			return false;
		}
		for (let obstacle of obstacles) {
			let obstacleLeft, obstacleRight, obstacleTop, obstacleBottom;

			if ("left" in obstacle) {
				obstacleLeft = obstacle.left;
				obstacleRight = obstacleLeft + obstacle.width;
			} else {
				// "right" is given
				obstacleRight = roomWidth - obstacle.right;
				obstacleLeft = obstacleRight - obstacle.width;
			}

			if ("top" in obstacle) {
				obstacleTop = obstacle.top;
				obstacleBottom = obstacleTop + obstacle.height;
			} else {
				// "bottom" is given
				obstacleBottom = roomHeight - obstacle.bottom;
				obstacleTop = obstacleBottom - obstacle.height;
			}

			// Check for overlap between the character's area and the obstacle.
			if (
				rightEdge > obstacleLeft &&
				x < obstacleRight &&
				bottomEdge > obstacleTop &&
				y < obstacleBottom
			) {
				// There is an overlap with an obstacle.
				console.log("false");
				return false;
			}
		}
		console.log("true");
		return true;
	};

	const goLeft = useCallback(() => {
		setPosition(prevPos => {
			const newX = prevPos.x - SHIFT;
			if (checkIfPositionIsValid(newX, prevPos.y, obstaclesData)) {
				return { ...prevPos, x: newX };
			}
			return prevPos;
		});
	}, []);

	const goRight = useCallback(() => {
		setPosition(prevPos => {
			const newX = prevPos.x + SHIFT;
			if (checkIfPositionIsValid(newX, prevPos.y, obstaclesData)) {
				return { ...prevPos, x: newX };
			}
			return prevPos;
		});
	}, []);

	const goUp = useCallback(() => {
		setPosition(prevPos => {
			const newY = prevPos.y - SHIFT;
			if (checkIfPositionIsValid(prevPos.x, newY, obstaclesData)) {
				return { ...prevPos, y: newY };
			}
			return prevPos;
		});
	}, []);

	const goDown = useCallback(() => {
		setPosition(prevPos => {
			const newY = prevPos.y + SHIFT;
			if (checkIfPositionIsValid(prevPos.x, newY, obstaclesData)) {
				return { ...prevPos, y: newY };
			}
			return prevPos;
		});
	}, []);

	const handlers = {
		LEFT: goLeft,
		RIGHT: goRight,
		UP: goUp,
		DOWN: goDown,
	};

	const styles = {
		top: `${position.y || "0"}px`,
		left: `${position.x || "0"}px`,
		height: `${height}px`,
		width: `${width}px`,
	};

	return (
		<HotKeys keyMap={keyMap} handlers={handlers}>
			<div style={styles} className="character">
				Test
			</div>
		</HotKeys>
	);
};

Character.propTypes = {
	obstaclesData: PropTypes.arrayOf(
		PropTypes.shape({
			top: PropTypes.number,
			left: PropTypes.number,
			width: PropTypes.number,
			height: PropTypes.number,
			right: PropTypes.number,
			bottom: PropTypes.number,
		}),
	).isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default Character;
