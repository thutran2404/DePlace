import React from "react";
import Chair from "../base/Chair";
import Table from "../base/Table";

const FrontDeskSet = () => (
	<div className="table-set">
		{/* A set consisting of a Table and Chair */}
		<Table />
		<Chair />
	</div>
);

export default FrontDeskSet;
