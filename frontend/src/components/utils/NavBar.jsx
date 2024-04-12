import React from "react";
import Button from "./Button";

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-brand">Virtual Workspace</div>
			<div className="navbar-links">
				<Button onClick={() => console.log("Navigate to home")}>Home</Button>
				<Button onClick={() => console.log("Navigate to about")}>About</Button>
				{/* Add more navigation links/buttons here */}
			</div>
		</nav>
	);
};

export default NavBar;
