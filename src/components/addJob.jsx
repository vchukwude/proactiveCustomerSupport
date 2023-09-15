import axios from "axios";
import { Check, Copy, Loader2 } from "lucide-react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { toast } from "react-toastify";

const AddJob = ({ toggleModal }) => {
	const [formState, setFormState] = useState({
		"Job Number": 0,
		Cause: "",
		"Work Log Ref": "",
		"Job Description": "",
		Team: "",
		Forename: "",
		Surname: "",
		"Address 1": "",
		"Reported Date": "",
		"Job Status": "",
		"Site Ref": "",
		Postcode: "",
		Region: "",
		Service: "",
		Priority: "",
		"Job Status Group": "",
		"Job Actual Start Date": "",
		"Appointment Duration": 0,
		"Site Type": "",
		"Team Group": "",
		"Number Actual Appointments": 0,
		"Number Completed Appointments": 0,
		"Appointment Status": "",
		// Complaints: "",
	});

	const [jobID, setJobID] = useState("");

	const [isLoading, setIsLoading] = useState(false);
	const [isCopied, setIsCopied] = useState(false);

	const baseUrl = "http://127.0.0.1:5000";

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const postData = {
				...formState,
				"Job Ref": nanoid(6),
			};

			const api = axios.create({
				baseURL: baseUrl,
				withCredentials: true,
			});
			const responsePost = await api.post(`${baseUrl}/addjob`, postData);
			if (responsePost.status === 200) {
				toast.success("Job successfully created");
				setJobID(responsePost.data["job_id"]);
			}
		} catch (e) {
			toast.error("An error occurred while trying to create job");
		} finally {
			setFormState({
				"Job Number": 0,
				Cause: "",
				"Work Log Ref": "",
				"Job Description": "",
				Team: "",
				Forename: "",
				Surname: "",
				"Address 1": "",
				"Reported Date": "",
				"Job Status": "",
				"Site Ref": "",
				Postcode: "",
				Region: "",
				Service: "",
				Priority: "",
				"Job Status Group": "",
				"Job Actual Start Date": "",
				"Appointment Duration": 0,
				"Site Type": "",
				"Team Group": "",
				"Number Actual Appointments": 0,
				"Number Completed Appointments": 0,
				"Appointment Status": "",
				// Complaints: "",
			});
			setIsLoading(false);
		}
	};

	const handleChange = (e) => {
		setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(jobID);
		setIsCopied(true);
	};

	return (
		<>
			{/* <!-- Modal content --> */}
			<div
				className='relative overflow-y-scroll p-4 bg-indigo rounded-lg bg-white shadow dark:bg-gray-800 sm:p-8 w-11/12 max-w-[700px] max-h-[700px]'
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				{/* <!-- Modal header --> */}
				<div className='flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600'>
					<h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
						Add a New Record
					</h3>
					<button
						type='button'
						className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
						data-modal-toggle='defaultModal'
						onClick={toggleModal}
					>
						<svg
							aria-hidden='true'
							className='w-5 h-5'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clip-rule='evenodd'
							></path>
						</svg>
						<span className='sr-only'>Close modal</span>
					</button>
				</div>
				{/* <!-- Modal body --> */}
				{jobID === "" ? (
					<form onSubmit={handleSubmit}>
						<div className='grid gap-8 mb-4 sm:grid-cols-2'>
							<div>
								<label
									htmlFor='name'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Job Number
								</label>
								<input
									onChange={handleChange}
									type='number'
									name='Job Number'
									id='Job Number'
									value={formState["Job Number"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter job number'
								/>
							</div>
							<div>
								<label
									htmlFor='brand'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Cause
								</label>
								<input
									onChange={handleChange}
									type='text'
									name='Cause'
									id='Cause'
									value={formState.Cause}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter cause'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='price'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Work Log Ref
								</label>
								<input
									type='text'
									onChange={handleChange}
									name='Work Log Ref'
									id='Work Log Ref'
									value={formState["Work Log Ref"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter work log ref'
								/>
							</div>
							<div>
								<label
									htmlFor='Team'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Team
								</label>
								<input
									type='text'
									name='Team'
									onChange={handleChange}
									id='Team'
									value={formState.Team}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter team details here'
								/>
							</div>
							{/* <div>
							<label
								htmlFor='category'
								className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							>
								Category
							</label>
							<select
								id='category'
								className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
							>
								<option selected=''>Select category</option>
								<option value='TV'>TV/Monitors</option>
								<option value='PC'>PC</option>
								<option value='GA'>Gaming/Console</option>
								<option value='PH'>Phones</option>
							</select>
						</div> */}
							<div className='sm:col-span-2'>
								<label
									htmlFor='jobDescription'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Job Description
								</label>
								<textarea
									onChange={handleChange}
									id='description'
									name='Job Description'
									value={formState["Job Description"]}
									rows='4'
									className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='Write job description here'
									required
								></textarea>
							</div>

							<div>
								<label
									htmlFor='Surname'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Surname
								</label>
								<input
									type='text'
									onChange={handleChange}
									name='Surname'
									id='Surname'
									value={formState.Surname}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter surname  here'
								/>
							</div>

							<div>
								<label
									htmlFor='Forename'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Forename
								</label>
								<input
									type='text'
									onChange={handleChange}
									name='Forename'
									id='Forename'
									value={formState.Forename}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter forename details here'
								/>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='Address 1'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Address 1
								</label>
								<input
									type='text'
									name='Address 1'
									onChange={handleChange}
									id='Address 1'
									value={formState["Address 1"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter primary address'
								/>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='Reported Date'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Reported Date
								</label>
								<input
									type='date'
									onChange={handleChange}
									name='Reported Date'
									id='Reported Date'
									value={formState["Reported Date"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter reported date here'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='Job Status'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Job Status
								</label>
								<input
									type='text'
									onChange={handleChange}
									name='Job Status'
									id='Job Status'
									value={formState["Job Status"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter job status here'
								/>
							</div>
							<div>
								<label
									htmlFor='reportedDate'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Site Ref
								</label>
								<input
									onChange={handleChange}
									type='number'
									value={formState["Site Ref"]}
									name='Site Ref'
									id='Site Ref'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter site ref here'
								/>
							</div>
							<div>
								<label
									htmlFor='Postcode'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Postcode
								</label>
								<input
									onChange={handleChange}
									type='text'
									name='Postcode'
									id='Postcode'
									value={formState.Postcode}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter postcode here'
								/>
							</div>
							<div>
								<label
									htmlFor='Region'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Region
								</label>
								<input
									onChange={handleChange}
									type='text'
									name='Region'
									id='Region'
									value={formState.Region}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter region here'
								/>
							</div>
							<div>
								<label
									htmlFor='Service'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Service
								</label>
								<input
									onChange={handleChange}
									type='text'
									name='Service'
									id='Service'
									value={formState.Service}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter service here'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='Priority'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Priority
								</label>
								<input
									onChange={handleChange}
									type='text'
									name='Priority'
									id='Priority'
									value={formState.Priority}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter priority here'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='Job Status Group'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Job Status Group
								</label>
								<input
									onChange={handleChange}
									type='text'
									name='Job Status Group'
									id='Job Status Group'
									value={formState["Job Status Group"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter job status group here'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='Job Actual Start Date'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Job Actual Start Date
								</label>
								<input
									onChange={handleChange}
									type='date'
									name='Job Actual Start Date'
									id='Job Actual Start Date'
									value={formState["Job Actual Start Date"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter job actual start date here'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='Appointment Duration'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Appointment Duration
								</label>
								<input
									onChange={handleChange}
									type='number'
									name='Appointment Duration'
									id='Appointment Duration'
									value={formState["Appointment Duration"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter appointment duration  here'
								/>
							</div>
							<div>
								<label
									htmlFor='Site Type'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Site Type
								</label>
								<input
									type='text'
									name='Site Type'
									id='Site Type'
									onChange={handleChange}
									value={formState["Site Type"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter site type here'
								/>
							</div>
							<div>
								<label
									htmlFor='Team Group'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Team Group
								</label>
								<input
									type='text'
									name='Team Group'
									id='Team Group'
									onChange={handleChange}
									value={formState["Team Group"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter  team group here'
								/>
							</div>
							<div>
								<label
									htmlFor='Number Actual Appointments'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Number Actual Appointments
								</label>
								<input
									onChange={handleChange}
									type='number'
									name='Number Actual Appointments'
									id='Number Actual Appointments'
									value={formState["Number Actual Appointments"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter actual appointment number here'
								/>
							</div>
							<div>
								<label
									htmlFor='Number Completed Appointments'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Number Completed Appointments
								</label>
								<input
									onChange={handleChange}
									type='number'
									value={formState["Number Completed Appointments"]}
									name='Number Completed Appointments'
									id='Number Completed Appointments'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter number of completed appointments here'
								/>
							</div>
							<div>
								<label
									htmlFor='Appointment Status'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Appointment Status
								</label>
								<input
									onChange={handleChange}
									type='text'
									name='Appointment Status'
									id='Appointment Status'
									value={formState["Appointment Status"]}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter appointment status here'
								/>
							</div>
							{/* <div className='sm:col-span-2'>
								<label
									htmlFor='Complaints'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								>
									Complaints
								</label>
								<input
									onChange={handleChange}
									type='text'
									name='Complaints'
									id='Complaints'
									value={formState.Complaints}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
									placeholder='enter complaints here'
									required
								/>
							</div> */}
						</div>
						<button
							type='submit'
							className='text-white justify-center
                         inline-flex items-center mt-5 w-full bg-indigo-500  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
						>
							{isLoading ? (
								<Loader2 className='mr-2 h-4 w-4 animate-spin' />
							) : (
								<svg
									className='mr-1 -ml-1 w-6 h-6'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
										clipRule='evenodd'
									></path>
								</svg>
							)}
							Add new job
						</button>
					</form>
				) : (
					<div className='p-4'>
						<h2 className='text-lg leading-8 tracking-wide text-center  text-gray-500 font-bold '>
							The Job with reference number
							<span className='text-indigo-600  inline-flex mx-2'>
								{jobID}
								<span
									onClick={handleCopy}
									
								>
									{!isCopied ? (
										<Copy className=' w-4 h-4 ' />
									) : (
										<Check className=' w-4 h-4 ' />
									)}
								</span>
							</span>
							has been successfully created
						</h2>
					</div>
				)}
			</div>
		</>
	);
};

export default AddJob;
