import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./components/Login";
import Complaints from "./components/Complaints";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";
import Services from "./components/Services";
import Status from "./components/Status";
import Comp from "./components/Comp";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='login' element={<Login />} />
			<Route path='register' element={<Signup />} />
			<Route
				path='complaints'
				element={<ProtectedRoute component={<Complaints />} />}
			/>
			<Route
				path='dashboard' 
				element={<ProtectedRoute component={<Dashboard />} />}
			>
				<Route index path='status' element={<Status />} />
				<Route path='services' exact element={<Services />} />
				<Route path='complaints' exact element={<Comp />} />
				
			</Route>
		</Routes>
	);
}

export default App;
