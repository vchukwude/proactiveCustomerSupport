import axios from "axios";
import { useState } from "react";
import Loader from "./Loader.";
import { Loader2 } from "lucide-react";

const Complaints = () => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const baseUrl = "https://help.pplrepairshub.co.uk";

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		if (query) {
			console.log(query);
			try {
				const postData = {
					query,
				};
				console.log("POST Data:", postData);

				const responsePost = await axios.post(
					`${baseUrl}/complaints`,
					postData
				);
				console.log("POST API response:", responsePost.data);
				setResults(responsePost.data.status);
				// setResults(responsePost.data[criteria] || []);
			} catch (error) {
				console.error("POST API error:", error);
			} finally {
				setIsLoading(false);
			}
		}
	};

	const handleChange = (e) => {
		setResults("");
		setQuery(e.target.value);
	};

	// POST API response: {message: 'Success', status: '0'}

	return (
		<div className='w-11/12 max-w-[1200px] mx-auto'>
			<div className='h-[100px] w-full lg:w-6/12 my-10 shadow-lg mx-auto rounded-lg bg-indigo-500 flex items-center justify-center'>
				<h1 className='text-lg text-white md:text-3xl font-bold text-center'>
				Predictor
				</h1>
			</div>
			<div className='mt-10 mx-auto p-8 rounded-lg  w-full lg:w-6/12  shadow-sm border border-gray-100'>
				<form onSubmit={handleSubmit}>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
							<svg
								className='w-4 h-4 text-gray-500 dark:text-gray-400'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'
							>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
								/>
							</svg>
						</div>
						<input
							type='search'
							id='search'
							className='block  placeholer:overflow-clip placeholder:text-[10px]  sm:placeholder:text-[14px] w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Enter Job Reference Number'
							required
							value={query}
							onChange={handleChange}
						/>
						<button
							type='submit'
							className='text-white flex absolute right-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-500 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
						>
							{" "}
							{isLoading ? (
								<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							) : null}
							Predict
						</button>
					</div>
				</form>
			</div>
			{(results !== "" || isLoading) && (
				<div className='mt-10 flex items-center justify-center min-h-[300px] mx-auto p-8 rounded-lg  w-full lg:w-6/12  shadow-sm border border-gray-100'>
					{isLoading ? (
						<Loader />
					) : results === "0" ? (
						<h2 className='text-lg text-gray-500 text-center font-bold'>
							The Job with reference number{" "}
							<span className='text-indigo-600'>{query}</span> Would Result in a
							Complaint
						</h2>
					) : (
						<h2 className='text-lg text-center  text-gray-500 font-bold'>
							The Job with reference number{" "}
							<span className='text-indigo-600'>{query}</span> Would Not Result
							in a Complaint
						</h2>
					)}
				</div>
			)}
		</div>
	);
};

export default Complaints;
