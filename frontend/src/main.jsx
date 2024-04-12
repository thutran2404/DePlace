import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import JulianWorkspace from "./routes/JulianWorkspace";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
