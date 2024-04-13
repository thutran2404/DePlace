import React, { useState } from "react";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match.");
			return;
		}

		console.log("Sign Up with: ", { email, password });
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Sign Up</h2>
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
			<div>
				<label htmlFor="confirmPassword">Confirm Password:</label>
				<input
					type="password"
					id="confirmPassword"
					value={confirmPassword}
					onChange={e => setConfirmPassword(e.target.value)}
					required
				/>
			</div>
			<button type="submit">Sign Up</button>
		</form>
	);
};

export default SignUp;
