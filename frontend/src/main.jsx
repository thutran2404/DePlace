import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import JulianWorkspace from "./routes/JulianWorkspace";
import LibraryWorkspace from "./routes/LibraryWorkspace";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Welcome from "./components/Welcome";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
	{
		path: "/error",
		element: <ErrorPage />,
	},
	{
		path: "/julian",
		element: <JulianWorkspace />,
	},
	{
		path: "/library",
		element: <LibraryWorkspace />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
	{
		path: "/sign-in",
		element: <SignIn />,
	},
	{
		path: "/welcome",
		element: <Welcome />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
