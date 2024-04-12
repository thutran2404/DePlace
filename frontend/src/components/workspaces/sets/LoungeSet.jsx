import React from "react";
import Chair from "./Chair";
import Table from "./Table";
// Assume you have other components like Sofa, Plant, etc.

const LoungeSet = () => {
	return (
		<div className="lounge-set">
			<h2>Lounge Area</h2>
			<Chair />
			<Table />
			{/* Add more components as needed, such as: */}
			{/* <Sofa /> */}
			{/* <Plant /> */}
			{/* You can also manage the layout here, for example, using CSS Grid or Flexbox */}
		</div>
	);
};

export default LoungeSet;
