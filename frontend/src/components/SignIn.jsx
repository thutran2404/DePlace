import React, { useState } from "react";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
		console.log("Sign In with: ", { email, password });
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Sign In</h2>
			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
			</div>
			<button type="submit">Sign In</button>
		</form>
	);
};

export default SignIn;
