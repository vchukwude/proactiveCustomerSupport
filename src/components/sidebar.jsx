import { Activity, AlignEndHorizontal, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
	const location = useLocation();
	 
	return (
        <div className='m-5  flex-col shadow-sm border border-gray-100 rounded-2xl min-h-[80vh] w-[300px] hidden md:flex pt-10'>
            <h2 className="text-lg ml-8 mb-6 text-gray-600  font-bold">Data Visuals</h2>
			<ul className=" w-full space-y-6">
				<li  className="w-full">
					<Link to='/dashboard/status'  className={`p-6 w-full flex items-center hover:bg-gray-50  hover:text-indigo-500 ${location.pathname === "/dashboard/status" ? 'text-indigo-500 bg-indigo-50 ' : 'text-gray-500'}`}> <Activity className="w-4 h-4 mr-2 " />Job Status Groups</Link>
				</li>
				<li className="w-full">
					<Link to='/dashboard/services' className={`p-6 w-full flex items-center hover:bg-gray-50  hover:text-indigo-500 ${location.pathname === "/dashboard/services" ? 'text-indigo-500 bg-indigo-50 ' : 'text-gray-500'}`}> <AlignEndHorizontal className="w-4 h-4 mr-2 " /> Job Services</Link>
				</li>
				<li className="w-full">
					<Link to='/dashboard/complaints' className={`p-6 w-full flex items-center hover:bg-gray-50  hover:text-indigo-500 ${location.pathname === "/dashboard/complaints" ? 'text-indigo-500 bg-indigo-50 ' : 'text-gray-500'}`}> <BarChart3  className="w-4 h-4 mr-2 "/>Complaints</Link>
				</li> 
			</ul>
		</div>
	);
};

export default Sidebar;
