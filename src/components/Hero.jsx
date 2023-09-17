import { useState } from "react";
import Modal from "./Modal";
import AddJob from "./addJob";

const Hero = ({ children }) => {
	const token = localStorage.getItem("authToken");
	const [isFormOpen, setisFormOpen] = useState(false);

	const toggleModal = () => {
		if (!token) window.location.href = "/login";
		setisFormOpen(!isFormOpen);
	};
	return (
		<>
			<section class='bg-white h-[95vh] flex items-center dark:bg-gray-900'>
				<div class='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
					<div class='mr-auto place-self-center lg:col-span-7'>
						<h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white'>
							Predictive System for companies
						</h1>
				
						{!token && (
							<a
								href='/register'
								className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900'
							>
								Get started
								<svg
									class='w-5 h-5 ml-2 -mr-1'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
										clipRule='evenodd'
									></path>
								</svg>
							</a>
						)}
						<span
							onClick={toggleModal}
							class=' cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
						>
							Add new Job
						</span>
						{token && (
							<a
								href='/complaints'
								className='inline-flex  ml-2  items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-900'
							>
								Predict Job
								<svg
									class='w-5 h-5 ml-2 -mr-1'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
										clipRule='evenodd'
									></path>
								</svg>
							</a>
						)}
					</div>
					<div class='hidden lg:mt-0 lg:col-span-5 lg:flex relative z-50'>
						<div className='hidden lg:flex w-[500px] h-[350px] bg-indigo-50 rounded-lg absolute top-3 -right-5 z-10'></div>
						<img
							className='rounded-lg relative z-50'
							src='/bot.jpg'
							alt='mockup'
						/>
					</div>
				</div>
				{isFormOpen && (
					<Modal toggleModal={toggleModal}>
						<AddJob toggleModal={toggleModal} />
					</Modal>
				)}
			</section>
		</>
	);
};

export default Hero;
