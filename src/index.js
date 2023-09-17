import React from "react";
import ReactDOM from "react-dom/client"; // Correct the import statement
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import App from "./App";
import AuthProvider from "./context/AuthContext";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Home />,
// 	},
// 	{
// 		path: "complaints",
// 		element: <ProtectedRoute component={<Complaints />} />,
// 	},
// 	{
// 		path: "dashboard",
// 		element: <ProtectedRoute component={<Dashboard />} />,
// 	},
// 	// {
// 	// 	path: "interactive",
// 	// 	element: <ProtectedRoute component={<Interactive />} />,
// 	// },
// 	// {
// 	// 	path: "getstarted",
// 	// 	element: <Getstarted />,
// 	// },

// 	{
// 		path: "login",
// 		element: <Login />,
// 	},
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<BrowserRouter>
				<Layout>
					<App />
				</Layout>
			</BrowserRouter>
		</AuthProvider>
	</React.StrictMode>
);
