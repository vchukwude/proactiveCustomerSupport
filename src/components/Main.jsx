import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<div className='border shadow-sm rounded-2xl w-10/12 border-gray-100 min-h-[80vh]'>
			{<Outlet/>}
		</div>
	);
};

export default Main;
