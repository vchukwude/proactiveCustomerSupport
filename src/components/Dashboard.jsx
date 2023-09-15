import Main from "./Main";
import Sidebar from "./sidebar";

const Dashboard = () => {
	return (
		<div className="flex items-center  h-[90vh] ">
			<Sidebar />
			<Main />
		</div>
	);
};

export default Dashboard;
