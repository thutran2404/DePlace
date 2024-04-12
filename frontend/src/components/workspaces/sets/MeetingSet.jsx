import React from "react";
import Chair from "../base/Chair";
import Table from "../base/Table";
import "./MeetingSet.css";

const MeetingSet = () => (
	<div className="tableSet">
		<div className="chairContainer top">
			<Chair rotation={270} />
		</div>
		<div className="chairContainer right">
			<Chair rotation={90} />
		</div>
		<div className="chairContainer bottom">
			<Chair rotation={270} />
		</div>
		<div className="chairContainer left">
			<Chair rotation={90} />
		</div>
		<div className="tableContainer">
			<Table height={135} width={75} />
		</div>
	</div>
);

export default MeetingSet;
