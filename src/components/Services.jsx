import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PieChart from "./pieChart";

const Services = () => {
	const [data, setData] = useState([]);
	const [servicesArr, setServicesArr] = useState([]);
	const [service, setService] = useState("All");
	const [isLoading, setIsLoading] = useState(true);
	const [option, setOption] = useState("AllData");

	const baseUrl = "http://127.0.0.1:5000";

	useEffect(() => {
		const fetchData = async () => {
			try {
				//homophones
				const responseGet = await axios.get(
					`${baseUrl}/services?query=${option}&service=${service}`
				);
				setData(responseGet.data);
			} catch (error) {
				toast.error("error loading chart");
			} finally {
				setIsLoading(false);
			}
		};
		fetchData(); // Call fetchData inside useEffect
	}, [option, service]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				//homophones
				const responseGet = await axios.get(`${baseUrl}/getservices`);

				setServicesArr(responseGet.data);
			} catch (error) {
				console.error(error);
				toast.error("error loading chart", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData(); // Call fetchData inside useEffect
	}, []);

	const handleSelectDropDownChange = (e) => {
		setOption(e.target.value);
	};

	const handleServiceDropDownChange = (e) => {
		setService(e.target.value);
	};

	return (
		<div className=' flex flex-col items-center'>
			<h2 className='text-2xl mt-5 font-bold text-gray-500'>
				Visualisation of Services Rendered
			</h2>
			<div className='flex space-x-4'>
				<div className='w-[300px] my-5'>
					<label
						htmlFor='countries'
						className='block m-2  text-sm font-medium text-gray-500'
					>
						Choose Service
					</label>
					<select
						id='countries'
						onChange={handleServiceDropDownChange}
						className='bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5   dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
					>
						<option value='All'>All Services</option>
						{servicesArr.map((service) => (
							<>
								<option value={service} key={service}>
									{service}
								</option>
							</>
						))}
					</select>
				</div>
				<div className='w-[300px] my-5'>
					<label
						htmlFor='countries'
						className='block m-2  text-sm font-medium text-gray-500'
					>
						Filter By Period
					</label>
					<select
						id='countries'
						onChange={handleSelectDropDownChange}
						className='bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5   dark:focus:ring-indigo-500 dark:focus:border-indigo-500'
					>
						<option value='AllData'>All time</option>
						<option value='onemonth'>Last 1 Month</option>
						<option value='sixmonths'>Last 6 Months</option>
						<option value='oneyear'>Last 1 year</option>
					</select>
				</div>
			</div>

			{isLoading ? (
				<h1 className='text-lg text-gray-400 font-medium'>Loading...</h1>
			) : (
				<PieChart data={data} categoryKey='group_name' valueKey='Count' />
			)}
		</div>
	);
};

export default Services;
