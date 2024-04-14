import React from "react";
import styles from "./Julian.module.css";
import Character from "../character/Character";
import Obstacle from "../shared/Obstacle";

const Julian = () => {
	const obstaclesData = [
		{ top: 70, left: 435, width: 200, height: 335 },
		{ top: 86, right: 425, width: 75, height: 40 },
		{ bottom: 0, left: 440, width: 190, height: 135 },
		{ top: 130, right: 110, width: 75, height: 40 },
		{ bottom: 270, right: 100, width: 75, height: 40 },
		{ height: 10, width: 325, top: 70, left: 0 },
		{ height: 10, width: 60, top: 70, left: 380 },
		{ height: 230, width: 10, top: 120, left: 265 },
		// Quynh
		{ height: 10, width: 270, top: 410, left: 0 },
		{ height: 8.75, width: 10, top: 80, left: 265 },
		{ height: 19, width: 10, top: 390, left: 265 },
		{ height: 19, width: 10, top: 390, left: 265 },
		{ height: 55, width: 10, top: 408, left: 622 },
		{ height: 30, width: 10, top: 580, left: 622 },
		{ height: 80, width: 40, top: 295, left: 390 },
		{ height: 60, width: 190, top: 560, left: 440 },
	];

	return (
		<div className={styles.julianContainer}>
			<Character obstaclesData={obstaclesData} height={30} width={30} />
			<Obstacle height={335} width={200} top={70} left={435} />
			<Obstacle height={40} width={75} top={86} right={425} />
			<Obstacle height={135} width={190} bottom={0} left={440} />
			<Obstacle height={40} width={75} right={110} top={130} />
			<Obstacle height={40} width={75} bottom={270} right={110} />
			<Obstacle height={10} width={325} top={70} left={0} />
			<Obstacle height={10} width={60} top={70} left={380} />
			<Obstacle height={230} width={10} top={120} left={265} />
			{/* Quynh */}
			<Obstacle height={10} width={270} top={410} left={0} />
			<Obstacle height={8.75} width={10} top={80} left={265} />
			<Obstacle height={19} width={10} top={390} left={265} />
			<Obstacle height={55} width={10} top={408} left={622} />
			<Obstacle height={240} width={10} top={477} left={265} />
			<Obstacle height={30} width={10} top={580} left={622} />
			<Obstacle height={80} width={40} top={295} left={390} />
			{/* <Obstacle height={60} width={190} top={560} left={440} /> */}
		</div>
	);
};

export default Julian;
