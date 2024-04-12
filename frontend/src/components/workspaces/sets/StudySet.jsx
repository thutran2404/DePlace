import React from "react";
import Chair from "../base/Chair";
import StudyTable from "../base/StudyTable";
import "./StudySet.css";

const StudySet = () => (
	<div className="studySet">
		<div className="d-flex center">
			<div>
				<Chair height={25} width={25} rotation={180} />
			</div>
			<div>
				<Chair height={25} width={25} rotation={180} />
			</div>
			<div>
				<Chair height={25} width={25} rotation={180} />
			</div>
			<div>
				<Chair height={25} width={25} rotation={180} />
			</div>
			<div>
				<Chair height={25} width={25} rotation={180} />
			</div>
		</div>
		<div className="studyTable">
			<StudyTable />
		</div>
	</div>
);

export default StudySet;
